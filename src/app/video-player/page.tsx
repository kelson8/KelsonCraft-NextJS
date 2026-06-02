import React from 'react'
import {MainContainer} from "@/components/main-container";
import {ReadVideoJsonFile} from "@/components/read-json-files";
import {containerPageClass} from "@/util/constants";
import {Metadata} from "next";

// Video list page, this will play the videos from the videos.json.
// This might be useful to look into later
// https://www.slingacademy.com/article/next-js-how-to-set-page-title-and-meta-description/

export const metadata: Metadata = {
    title: "Video List",
}

const VideoListPage = () => {
    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Video list</h1>
                <br></br>
                <VideoListPageContents/>
            </MainContainer>
        </div>

    );
}

async function VideoListPageContents() {
    return (
        <div
            className={containerPageClass}>
            {/*Display a list of files in the videos.json file.*/}
            <ReadVideoJsonFile/>
        </div>
    )
}

export default VideoListPage;
