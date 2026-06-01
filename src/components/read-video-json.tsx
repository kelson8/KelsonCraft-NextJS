// import { promises as fs } from "fs";
import fsPromises from 'fs/promises';
import {blueLinkCss, videosJsonFile, videoUrl} from "@/util/constants";
// import {BlueLink} from "@/util/custom-link";

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

// export let videoTitle: string;

// Try to search for the title in the json.
function search(data: VideoEntry|VideoEntry[], s: string): VideoEntry[] {
    let result: VideoEntry[] = [];
    if (data instanceof Array) {
        for (let i = 0; i < data.length; i++) {
            result = result.concat(search(data[i], s));
        }
    } else {
        // if (data.subNames instanceof Array) {
        // if (data.title instanceof Array) {
        //     result = result.concat(search(data.subNames, s));
        // } else {
            if (data.title === s) {
                result = result.concat(data);
            }
        // }
    }
    return result;
}

// console.log(search(data, 'white'));

/**
 * Read the list of videos from the videos.json file
 * TODO Make this send the title to the video page metadata somehow
 */
export async function ReadVideoJson() {

    const jsonData = await fsPromises.readFile(videosJsonFile, 'utf8');
    const data: Record<string, VideoEntry> = JSON.parse(jsonData);


    // TODO Figure out how to set the video title for the page metadata.
    // videoTitle = videoTitle;



    return (
        <div>
            {Object.entries(data).map(([id, v]) => (
                <li key={id}>
                    <strong>{v.title}</strong> {v.restricted && <span>(restricted)</span>}
                    <div>{v.description || <em>No description</em>}</div>
                    {/*<div>File: {v.file}</div>*/}
                    <div>Video URL: <a className={blueLinkCss} href={videoUrl + "/" + v.file}>{videoUrl + "/" + v.file}</a>
                        {/* TODO Make this work, since it's a client component it doesn't work here. */}
                        {/*<div>Video URL: {BlueLink(videoUrl + "/" + v.file, videoUrl + "/" + id)}*/}
                    </div>
                    <br></br>
                </li>
            ))}
        </div>
    )

}