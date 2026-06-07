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
            <MainContainer pageHeader="Page not available." headerColor="text-indigo-500">
                <div
                    className={containerPageClass}>
                    <p>This website page has been disabled by the server administrators.
                        <br></br>
                        Click <Link href="/">Here</Link> to get back to the main page.
                    </p>
                </div>
            </MainContainer>
        </div>
    )
}

export default DisabledPage;