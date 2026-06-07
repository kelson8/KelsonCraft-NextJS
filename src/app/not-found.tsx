"use client";

import {BlueLink} from "@/util/custom-link";
import React from "react";
import {MainContainer} from "@/components/main-container";
import {containerPageClass} from "@/util/constants";

// https://www.youtube.com/watch?v=GCipVDqBD3k
// Custom 404 page

// TODO Look into this
// https://dev.to/alisamir/unauthorized-and-forbidden-pages-in-nextjs-15-2jm

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
                <MainContainer pageHeader="404 Not Found" headerColor="text-red-600">
                    <h1 className="text-center text-2xl font-bold"> Error 404 </h1>
                    <p> Page not found.
                        <br></br>
                        Click {BlueLink("/", "Here")} to get back to the main page.</p>

                </MainContainer>
            </div>

        </div>
    )
}