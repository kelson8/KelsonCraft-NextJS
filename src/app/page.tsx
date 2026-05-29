import React from 'react'
// import {CustomLink} from "@/app/util/custom-link";
import {MainContainer} from "@/app/components/main-container";
import Image from 'next/image'

// Using this tutorial for learning more Next.js 16
// https://youtu.be/I1V9YWqRIeI?t=1037

// Preset for Shadcn, not in use
// --preset b37aIC264

// I may need to add a dark/light theme toggle on here later
// https://dev.to/okpainmo/how-to-add-light-and-dark-theme-toggle-to-a-nextjs-app-using-tailwindcss-3113

// Centering images with Tailwind and Next.js
// https://stackoverflow.com/questions/65428940/next-js-image-centering-while-screen-size-increases
// https://stackoverflow.com/questions/75036276/center-an-image-in-tailwind-css

const Page = () => {

    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">KelsonCraft Website</h1>
                <br></br>

                <div
                    className="container mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-lg m-4 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200">

                    <p>Welcome to the new KelsonCraft website, this website is
                        going
                        to be using
                        NextJS with Typescript and Tailwind CSS. The old one was using Python Flask and Bootstrap
                        CSS.</p>

                    <p> I&#39;ve started working on this new website on May 29, 2026 and plan to have it up and running
                        soon. <br></br>
                        Once I figure out how to replicate everything I was doing on the old website, which isn&#39;t
                        much
                        and is mostly just
                        video playing and basic authentication, this should be ready for the public and to replace the
                        main website. </p>

                    {/*<CustomLink href="test.com" className="text-indigo-500">Test Link</CustomLink>*/}

                </div>


                {/* KelsonCraft logo, I may remove this later. */}
                <div className="p-6 flex justify-center">
                    <Image src="/android-chrome-512x512.png" alt="KelsonCraft Logo 512x512" width={128} height={128}></Image>
                </div>
            </MainContainer>
        </div>

    );
}

export default Page;
