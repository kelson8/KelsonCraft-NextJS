import React from 'react'
// import {CustomLink} from "@/util/custom-link";
import {MainContainer} from "@/components/main-container";
import Image from 'next/image'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faServer} from "@fortawesome/free-solid-svg-icons";
import {authRoutesEnabled, blueLinkCss, containerPageClass, mainHeaderClass} from "@/util/constants";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import Link from "next/link";

// Using this tutorial for learning more Next.js 16
// https://youtu.be/I1V9YWqRIeI?t=1037

// Preset for Shadcn, not in use
// --preset b37aIC264

// I may need to add a dark/light theme toggle on here later
// https://dev.to/okpainmo/how-to-add-light-and-dark-theme-toggle-to-a-nextjs-app-using-tailwindcss-3113

// Centering images with Tailwind and Next.js
// https://stackoverflow.com/questions/65428940/next-js-image-centering-while-screen-size-increases
// https://stackoverflow.com/questions/75036276/center-an-image-in-tailwind-css

// TODO Look into this
// https://www.slingacademy.com/article/nextjs-how-to-access-files-in-public-folder/

// I used this for making the development server work on the LAN:
// https://stackoverflow.com/questions/68254828/running-a-development-server-on-nextjs-on-the-network
// Set this argument in Webstorm: -H (local-ip)

// TODO Look into using Next Auth for Next.js authentication.

// TODO Setup Prisma DB and SQLite for Next Auth user management
// https://www.prisma.io/docs/orm/reference/prisma-cli-reference

// TODO Look into setting up downloads outside of the public folder, try to somewhat mimic my Flask system for downloads
// https://prateekbadjatya.medium.com/shield-your-data-how-to-manage-private-files-in-next-js-applications-5895c9093b1c

const HomePage = () => {

    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Home Page
                    <FontAwesomeIcon icon={faServer} className="fas fa-server"
                                     style={{color: "whitesmoke"}}></FontAwesomeIcon></h1>
                <br></br>

                <HomePageContents/>

                <HomePageLogo/>
            </MainContainer>
        </div>

    );
}

function HomePageContents() {
    return (
        <>
            <div
                className={containerPageClass}>

                <p>Welcome to the new KelsonCraft website, this website is
                    going
                    to be using
                    NextJS with Typescript and Tailwind CSS. The old one was using Python Flask and Bootstrap
                    CSS.</p>
                <br></br>

                <p> I&#39;ve started working on this new website on May 29, 2026 and plan to have it up and running
                    soon. <br></br>
                    Once I figure out how to replicate everything I was doing on the old website, which isn&#39;t
                    much
                    and is mostly just
                    video playing and basic authentication, this should be ready for the public and to replace the
                    main website. </p>

                <hr></hr>
                <br></br>


                <HomeLoginPages/>


                {/*<CustomLink href="test.com" className="text-indigo-500">Test Link</CustomLink>*/}

            </div>
        </>
    )
}

async function HomeLoginPages() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if(session) {
        return (
            <LoginPagesList />
        )
    } else {
        return (
            <LoginPagesList />
            )

    }

}

function HomePageLogo() {
    return (
        // KelsonCraft logo.
        <div className="p-6 flex justify-center">
            <Image src="/android-chrome-512x512.png" alt="KelsonCraft Logo 512x512" width={128}
                   height={128}></Image>
        </div>
    )
}

/**
 * List of login pages.
 * This only works if the auth routes are enabled in the .env.
 */
async function LoginPagesList() {
    if(authRoutesEnabled) {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (session) {
            return (
                <>
                    <p>You are logged in, redirect to the dashboard here</p>
                    <Link href="/dashboard" className={blueLinkCss}>/dashboard</Link>
                </>
            )
        }


        return (
            <>
                <h1 className={mainHeaderClass}>Login pages</h1>

                <ul className="list-disc">
                    <li><a href="/login">/login</a></li>
                    <li><a href="/register">/register</a></li>
                </ul>
            </>
        )
    }
}

export default HomePage;
