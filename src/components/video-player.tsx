// I guess this wasn't needed?
// Well this is needed for plyr-react, otherwise it says doucment is not defined.
// TODO Fix this to work with plyr-react.
"use client";
import React from "react";
import ReactPlayer from "react-player";

// import { Plyr } from "plyr-react"
// import "plyr-react/plyr.css"
import {Plyr} from "plyr-react";

// Video player test, using React Player
// https://www.npmjs.com/package/react-player
// TODO Make this get the video width and height depending on the screen size.
// So if user is on the desktop, make this a bit bigger, and smaller on phone/tablet screens.

const VideoPlayer = (videoTitle: string, videoFile: string) => {
    // Set the video path and title
    // TODO Make this obtain from the videos.json once I get that working.
    // const videosrc = "/videos/test-video1.mp4";
    // NCS Kawaii Mix | NCS - Copyright Free Music
    // const videosrc = "https://www.youtube.com/watch?v=iZ3gzxYCAMk";
    // const videoTitle = "NCS Kawaii Mix | NCS - Copyright Free Music";

// Player source configuration
//     const plyrProps = {
//         source: {
//             type: "video",
//             sources: [
//                 {
//                     // src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
//                     src: videoFile,
//                     type: "video/mp4",
//                     // TODO Make this size value not hard-coded, have it obtain from the video file with something.
//                     size: 720,
//                 },
//             ],
//             // poster:
//                 // "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
//         },
//         options: {
//             // Full list of options: https://github.com/sampotts/plyr#options
//             controls: [
//                 "play-large",
//                 "play",
//                 "progress",
//                 "current-time",
//                 "mute",
//                 "volume",
//                 "captions",
//                 "settings",
//                 "pip",
//                 "airplay",
//                 "fullscreen",
//             ],
//         },
//     }

    return (
        <div>
            <h1>{videoTitle}</h1>
            <div className="p-6 flex justify-center items-center w-full">

                {/* Attempting to use plyr-react */
                    /* https://www.npmjs.com/package/plyr-react
                    * TODO Set this up to work.
                    * */}

                {/*<Plyr {...plyrProps} />*/}

                <ReactPlayer
                    width="500px"
                    height="400px"
                    src={videoFile}
                    controls={true}
                    light={false}
                    // picture in picture
                    pip={true}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;