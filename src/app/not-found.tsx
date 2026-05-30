"use client";

import {BlueLink, CustomLink} from "@/util/custom-link";
import React from "react";
import {MainContainer} from "@/components/main-container";

// https://www.youtube.com/watch?v=GCipVDqBD3k
// Custom 404 page

// TODO Fix these up later, it can be used for multiple error pages.
// type ErrorPage = {
//     error: string;
// }
//
// // https://www.geeksforgeeks.org/typescript/what-is-the-record-type-in-typescript/
// const CustomErrorPageRecord: ErrorPage = {
//     error: "404",
// }

/**
 * TODO Move error page template into here, so I can use this for all my error pages.
 */
// function CustomErrorPage(errorType: ErrorPage) {
//     switch (errorType) {
//         case errorType.error:
//
//             break;
//
//     }
// }

export default function NotFound() {
    return (
        <div className="text-center">

            <div>
                <MainContainer>
                    <br></br>
                    <h1 className="text-4xl text-center text-red-600 text-bold">404 Not found</h1>
                    <br></br>

                    <div
                        className="container mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-lg m-4 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200">


                    <h1 className="text-center text-2xl font-bold"> Error 404 </h1>
            <p> Page not found.
            <br></br>

                Click {BlueLink("/", "Here")} to get back to the main page.</p>
                    </div>

        </MainContainer>
            </div>

        </div>
    )
}