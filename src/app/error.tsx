"use client";

// Error page for 500

import React from "react";
import {MainContainer} from "@/components/main-container";
import {containerPageClass} from "@/util/constants";
import {BlueLink} from "@/util/custom-link";

type ErrorProps = {
    error: Error;
    reset: () => void;
}

export default function GlobalError({error, reset}: ErrorProps) {
    console.log(error);

    return (
        <div className="text-center">

            <div>
                <MainContainer pageHeader="500 Internal Server Error" headerColor="text-red-600">
                    <h1 className="text-center text-2xl font-bold"> Error 500 </h1>
                    <p> There was an unexpected error in the request.
                        <br></br>

                        Click {BlueLink("/", "Here")} to get back to the main page.</p>

                    <button onClick={() => reset()} style={{marginTop: 16}}>
                        Retry
                    </button>
                </MainContainer>
            </div>

        </div>
    )
}