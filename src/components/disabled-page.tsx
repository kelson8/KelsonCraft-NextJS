"use client";
import {MainContainer} from "@/components/main-container";
import {containerPageClass} from "@/util/constants";
import Link from "next/link";

/**
 * The disabled page, use this for any pages that are disabled with the .env.
 */
const DisabledPage = () => {
    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Page not available.</h1>
                <br></br>

                <div
                    className={containerPageClass}>
                    <p>This website page has been disabled by the server administrators.
                        Click <Link href="/">Here</Link> to get back to the main page.
                    </p>
                </div>
            </MainContainer>
        </div>
    )
}

export default DisabledPage;