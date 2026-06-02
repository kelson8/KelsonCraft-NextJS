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

export default function GlobalError({ error, reset }: ErrorProps) {
    console.log(error);

    return (
    <div className="text-center">

        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-red-600 text-bold">500 Internal Server Error</h1>
                <br></br>

                <div
                    className={containerPageClass}>
                    <h1 className="text-center text-2xl font-bold"> Error 500 </h1>
                    <p> There was an unexpected error in the request.
                        <br></br>

                        Click {BlueLink("/", "Here")} to get back to the main page.</p>

                    <button onClick={() => reset()} style={{ marginTop: 16 }}>
                        Retry
                    </button>
                </div>

            </MainContainer>
        </div>

    </div>
    )
}