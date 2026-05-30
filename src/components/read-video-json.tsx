// import { promises as fs } from "fs";
import fsPromises from 'fs/promises';
import {videosJsonFile, videoUrl} from "@/util/constants";

// https://vercel.com/kb/guide/loading-static-file-nextjs-api-route

// https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
// https://www.geeksforgeeks.org/typescript/what-is-the-record-type-in-typescript/

/**
 * The video entry parameters from the JSON file.
 */
type VideoEntry = {
    title: string;
    description: string;
    file: string;
    restricted: boolean;
}

/**
 * Read the list of videos from the videos.json file
 */
export async function ReadVideoJson() {

    const jsonData = await fsPromises.readFile(videosJsonFile, 'utf8');
    const data: Record<string, VideoEntry> = JSON.parse(jsonData);

    return (
        <div>
            {Object.entries(data).map(([id, v]) => (
                <li key={id}>
                    <strong>{v.title}</strong> {v.restricted && <span>(restricted)</span>}
                    <div>{v.description || <em>No description</em>}</div>
                    {/*<div>File: {v.file}</div>*/}
                    <div>Video URL: <a href={videoUrl + "/" + v.file}>{videoUrl + "/" + id}</a>
                    </div>
                    <br></br>
                </li>
            ))}
        </div>
    )

}