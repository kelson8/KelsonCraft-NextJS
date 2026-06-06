import fs from 'fs';
import path from 'path';
import { NextRequest } from 'next/server';
import {videoPath} from "@/util/constants";
import mime from "mime-types";

// import jwt from 'jsonwebtoken';

// TODO Figure out how exactly this works.

// Example test route for the videos api.
// This should allow me to disable direct downloads of files.
// http://localhost:3000/api/video/Family%20Guy%20S18-E10%20Clip-1.mp4

//-------
// With JWT tokens, not implemented yet.
//-------

// export const runtime = 'nodejs';

// Use this method for JWT auth.

// const SECRET = process.env.VIDEO_TOKEN_SECRET || 'change-this-secret';
//
// function nodeStreamToWeb(stream: fs.ReadStream) {
//     return new ReadableStream({
//         async pull(controller) {
//             for await (const chunk of stream) controller.enqueue(chunk);
//             controller.close();
//         },
//         cancel() { stream.destroy(); },
//     });
// }
//
// export async function GET(req: NextRequest, { params }: { params: Promise<{ name: string }> | { name: string } }) {
//     const { name } = await params;
//     const auth = req.headers.get('authorization') || '';
//     const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
//     if (!token) return new Response('Unauthorized', { status: 401 });
//
//     try {
//         const payload = jwt.verify(token, SECRET) as { name?: string };
//         if (payload.name !== name) return new Response('Forbidden', { status: 403 });
//     } catch {
//         return new Response('Unauthorized', { status: 401 });
//     }
//
//     const filePath = path.join(process.cwd(), 'videos', name);
//     if (!fs.existsSync(filePath)) return new Response('Not found', { status: 404 });
//
//     const stat = fs.statSync(filePath);
//     const stream = fs.createReadStream(filePath);
//     return new Response(nodeStreamToWeb(stream), {
//         status: 200,
//         headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(stat.size) },
//     });
// }

//-------
// Without JWT tokens
//-------

function nodeStreamToWeb(stream: fs.ReadStream) {
    const reader = stream[Symbol.asyncIterator] ? stream[Symbol.asyncIterator]() : null;
    return new ReadableStream({
        async pull(controller) {
            if (!reader) {
                stream.on('data', (chunk) => controller.enqueue(chunk));
                stream.on('end', () => controller.close());
                stream.on('error', (err) => controller.error(err));
                return;
            }
            try {
                const { value, done } = await reader.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(value);
                }
            } catch (err) {
                controller.error(err);
            }
        },
        cancel() {
            stream.destroy();
        },
    });
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ name: string }> | { name: string } }
) {

    const resolved = await params;
    const name = resolved.name;
    const filePath = path.join(videoPath, name);

    if (!fs.existsSync(filePath)) return new Response('Not found', { status: 404 });

    const contentType = mime.lookup(filePath) || 'application/octet-stream';

    const stat = fs.statSync(filePath);
    const range = req.headers.get('range');
    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
        const stream = fs.createReadStream(filePath, { start, end });
        const body = nodeStreamToWeb(stream);

        const headers = new Headers({
            'Content-Range': `bytes ${start}-${end}/${stat.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': String(end - start + 1),
            'Content-Type': contentType,
        });
        return new Response(body, { status: 206, headers });
    } else {
        const stream = fs.createReadStream(filePath);
        const body = nodeStreamToWeb(stream);
        return new Response(body, {
            status: 200,
            // headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(stat.size) },
            headers: { 'Content-Type': contentType, 'Content-Length': String(stat.size) },
        });
    }
}