"use client";

import React from 'react'
import {MainContainer} from "@/components/main-container";
import VideoPlayer from "@/components/video-player";
import {containerPageClass} from "@/util/constants";
// import CustomVideoPlayer from "@/components/custom-video-player";
// import {displayVideoFile} from "@/components/display-video-file";

// Video player page

// https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
// TODO Fix this to work like on my Flask website, currently it displays the full video path
// Such as: 'NCS Kawaii Mix - NCS - Copyright Free Music.mp4', I would like for it to only display the video title from the JSON
//  in the URL.

/**
 * Video player page, currently setup to play videos with react-player
 * @param params The params for the video player, used for the url.
 */
// export default async function VideoPlayerPage({
export default function VideoPlayerPage({ params }: {
// export default async function VideoPlayerPage({ params }: {
    params: Promise<{ videoId: string }>
}) {

    // const {videoId} = await params;
    const {videoId} = React.use(params);

    // console.log(videoId);
    // const videoTitle = (await params).videoTitle;
    // console.log("Video title: " + videoTitle);

    return (
        <div>
            <MainContainer>
                <br></br>
                {/* TODO Make this display the title of the video */}
                <h1 className="text-4xl text-center text-indigo-500 text-bold">React Player Test</h1>
                <br></br>

                <div
                    className={containerPageClass}>
                    {/* Play a video from the file specified in the params. */}
                    {/* This works! Now to make it work for other videos. */}
                    {/* TODO Setup the video title for this later. */}
                    {VideoPlayer("Test Video", "/videos/" + videoId)}
                    {/*{CustomVideoPlayer("/videos/" + videoId)}*/}
                </div>
            </MainContainer>
        </div>

    );
}
