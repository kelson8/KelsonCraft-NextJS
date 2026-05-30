import React from 'react'
import {MainContainer} from "@/components/main-container";
import {ReadVideoJson} from "@/components/read-video-json";

// Video list page, this will play the videos from the videos.json.
// This might be useful to look into later
// https://www.slingacademy.com/article/next-js-how-to-set-page-title-and-meta-description/

const VideoListPage = () => {

    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Video list</h1>
                <br></br>

                <div
                    className="container mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-lg m-4 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200">
                    {/* Display a list of files in the videos.json file. */}
                    <ReadVideoJson />
                </div>
            </MainContainer>
        </div>

    );
}

export default VideoListPage;
