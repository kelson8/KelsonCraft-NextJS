// import { promises as fs } from "fs";
import fsPromises from 'fs/promises';
import {blueLinkCss, videoPagesJsonFile, videoUrl} from "@/util/constants";
import Link from "next/link";
// import {LogUserIp} from "@/util/log-user-ip";
// import path from "path";
// import fs from "fs";
// import {logger} from "@/lib/logger";
// import {headers} from "next/headers";
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

enum VideoEntryType {
    TITLE = 0,
    DESCRIPTION = 1,
    FILE = 2,
    RESTRICTED = 3,
}

type WebPageEntry = {
    title: string;
    description: string;
    subfolder: string
}

// export let videoTitle: string;

// Try to search for the title in the json.
// function search(data: VideoEntry|VideoEntry[], s: string): VideoEntry[] {
//     let result: VideoEntry[] = [];
//     if (data instanceof Array) {
//         for (let i = 0; i < data.length; i++) {
//             result = result.concat(search(data[i], s));
//         }
//     } else {
//         // if (data.subNames instanceof Array) {
//         // if (data.title instanceof Array) {
//         //     result = result.concat(search(data.subNames, s));
//         // } else {
//             if (data.title === s) {
//                 result = result.concat(data);
//             }
//         // }
//     }
//     return result;
// }

// console.log(search(data, 'white'));


/**
 * Display a list of videos from the json file.
 * TODO Make this send the title to the video page metadata somehow
 */
// export async function ReadJsonFile(fileName: string): Promise<void> {
export async function ReadVideoJsonFile() {

    const jsonData = await fsPromises.readFile(videoPagesJsonFile, 'utf8');
    const data: Record<string, VideoEntry> = JSON.parse(jsonData);


    // TODO Figure out how to set the video title for the page metadata.
    // videoTitle = videoTitle;


    // Test for getting the video info from the video id.
    // await GetVideoInfo("tom_clancy_wildlands_glitch1", VideoEntryType.TITLE);
    // const videoInfo = await GetVideoInfo("tom_clancy_wildlands_glitch1", VideoEntryType.TITLE);

    // I'm not sure why this doesn't work
    // https://nodejs.org/learn/asynchronous-work/discover-promises-in-nodejs
    // const videoInfo = await GetVideoInfo("tom_clancy_wildlands_glitch1", VideoEntryType.TITLE)
    // // await GetVideoInfo("tom_clancy_wildlands_glitch1", VideoEntryType.TITLE)
    // //     .then(result => console.log(result));
    // console.log(videoInfo);

    // This is a test for the new logger system.
    // await LogUserIp("/video-player")


    return (
        <div>
            {Object.entries(data).map(([id, v]) => (
                <li key={id}>
                    <strong>{v.title}</strong> {v.restricted && <span>(restricted)</span>}
                    <div>{v.description || <em>No description</em>}</div>
                    {/*<div>File: {v.file}</div>*/}
                    <div>Video URL: <a className={blueLinkCss}
                                       href={videoUrl + "/" + v.file}>{videoUrl + "/" + v.file}</a>
                        {/* TODO Make this work, since it's a client component it doesn't work here. */}
                        {/*<div>Video URL: {BlueLink(videoUrl + "/" + v.file, videoUrl + "/" + id)}*/}
                    </div>
                    <br></br>
                </li>
            ))}
        </div>
    )
}

/**
 /* Gets the video info, TODO Make this get a specific video entry, such as the title or description.
 * @param videoId the video to search for by numbered id in the json.
 * @param videoEntryType The type of the video entry to search for, such as VideoEntryType.TITLE for the video title.
 */
// export async function GetVideoInfo(videoEntry: VideoEntry) {
export async function GetVideoInfo(videoId: string, videoEntryType: VideoEntryType): Promise<string> {
    const jsonData = await fsPromises.readFile(videoPagesJsonFile, 'utf8');
    const data: Record<string, VideoEntry> = JSON.parse(jsonData);


    // This works!!
    // Well it works if this isn't set to return a string for some reason.
    Object.entries(data).map(([id, v]) => {
            if (id === videoId) {
                // console.log(v.title);
                // console.log(v.description);
                switch (videoEntryType) {
                    case VideoEntryType.TITLE:
                        // console.log(v.title);
                        return v.title;
                    // break;
                    case VideoEntryType.DESCRIPTION:
                        // console.log(v.description);
                        return v.description;
                    // break;
                    case VideoEntryType.FILE:
                        // console.log(v.file);
                        return v.file;
                    // break;
                    case VideoEntryType.RESTRICTED:
                        // console.log(v.restricted);
                        // return v.restricted;
                        break;
                }
            }


        }
    )

    return "";

}

/**
 * Read a json file for the website page lists.
 * Display a list of pages from a json file with a title and description.
 * @param webPage The web page subdirectory, such as '/misc
 * @param fileName The json file to read from.
 */
export async function ReadWebpageJsonFile(webPage: string, fileName: string) {
    const jsonData = await fsPromises.readFile(fileName, 'utf8');
    const data: Record<string, WebPageEntry> = JSON.parse(jsonData);

    return (
        <div>
            {Object.entries(data).map(([id, page]) => (

                <ul className="list-disc"
                    key={id}>
                    <li><Link className={blueLinkCss} href={webPage + '/' + id}>{page.title} </Link>
                        {/*<div>{page.description || <em>No description</em>}</div>*/}
                        {page.description}
                    </li>
                </ul>
            ))}
        </div>

    )
}

