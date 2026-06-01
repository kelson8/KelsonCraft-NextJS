// "use client";
import ReactPlayer from "react-player";



// const isClient = () => typeof window !== 'undefined';

// Video player test, using React Player
// https://www.npmjs.com/package/react-player
// TODO Make this get the video width and height depending on the screen size.
// So if user is on the desktop, make this a bit bigger, and smaller on phone/tablet screens.

const VideoPlayer = (videoTitle: string, videoFile: string) => {

    // Set the video path and title
    // These can be set manually for testing.
    // Videos public folder
    // const videosrc = "/videos/test-video1.mp4";
    // Videos api folder
    // const videosrc = "/api/video/test-video1.mp4";
    // NCS Kawaii Mix | NCS - Copyright Free Music
    // const videosrc = "https://www.youtube.com/watch?v=iZ3gzxYCAMk";
    // const videoTitle = "NCS Kawaii Mix | NCS - Copyright Free Music";

    // if(isClient()) {
    //     return (
    //         <div>
    //             <h1>{videoTitle}</h1>
    //             <div className="p-6 flex justify-center items-center w-full">
    //                 <Plyr {...plyrProps} />
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h1>{videoTitle}</h1>
            <div className="p-6 flex justify-center items-center w-full">

                {/* Attempting to use plyr-react */
                    /* https://www.npmjs.com/package/plyr-react
                    * TODO Set this up to work.
                    * */}
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