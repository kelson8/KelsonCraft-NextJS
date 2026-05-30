// import { promises as fs } from "fs";
import fsPromises from 'fs/promises';

// https://vercel.com/kb/guide/loading-static-file-nextjs-api-route

// https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
// https://www.geeksforgeeks.org/typescript/what-is-the-record-type-in-typescript/

type VideoEntry = {
    title: string;
    description: string;
    file: string;
    restricted: boolean;
}

export async function ReadVideoJson() {
    const videosJsonFile = process.cwd() + "/src/app/videos.json"

    const jsonData = await fsPromises.readFile(videosJsonFile, 'utf8');
    const data: Record<string, VideoEntry> = JSON.parse(jsonData);

    return (
        <div>
            {Object.entries(data).map(([id, v]) => (
                <li key={id}>
                    <strong>{v.title}</strong> {v.restricted && <span>(restricted)</span>}
                    <div>{v.description || <em>No description</em>}</div>
                    <div>File: {v.file}</div>
                    <div>Video ID: {id}</div>
                    {/* To use this to add videos to: */}
                    {/* <video controls width={480} src={`/videos/${v.file}`} /> */}
                </li>
            ))}

            {/*                <p key={i}>
                <span> Key Name: {key}</span>
                <span>Value: {jsonData[key]}</span>
            </p>

             */}
            {/*<h1>Title: {data.title}</h1>*/}
            {/*/!*<h1>Title: {jsonData.title}</h1>*!/*/}
            {/*<p>Description: {data.description}</p>*/}
            {/*<p>Filename: {data.file}</p>*/}
            {/*<p>Is restricted: {data.restricted}</p>*/}
        </div>
    )

}