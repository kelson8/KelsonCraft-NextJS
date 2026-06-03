import React from 'react'
import {MainContainer} from "@/components/main-container";
import {blueLinkCss, containerPageClass} from "@/util/constants";
import {Metadata} from "next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

// Video list page, this will play the videos from the videos.json.
// This might be useful to look into later
// https://www.slingacademy.com/article/next-js-how-to-set-page-title-and-meta-description/

// Mostly taken and adapted from my Flask Kelsoncraft website.
// https://kelsoncraft.net/about
// https://github.com/kelson8/FlaskWeb/blob/main/data/templates/about/about.html

// Tailwind list style type
// https://tailwindcss.com/docs/list-style-type

// Flowbite tables
// https://flowbite.com/docs/components/tables/

export const metadata: Metadata = {
    title: "About",
}

const AboutPage = () => {

    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">About page
                    <FontAwesomeIcon icon={faCircleInfo} />
                </h1>

                <br></br>

                <div className={containerPageClass}>
                    {/* I split up the about pages into sections. */}
                    <AboutWebsite/>

                    <hr className="p-6"></hr>
                    <AboutMe/>

                    <hr className="p-6"></hr>
                    <DisplayCodingAboutTables/>

                </div>
            </MainContainer>
        </div>

    );
}

//-----
// Page sections

/**
 * About me, displays on about page.
 */
function AboutMe() {
    return (
        <div className="p-6">
            <h1 className="text-4xl text-center">About me</h1>

            <p>My name is Kelson, and the username I use on a lot of services is kelson8.</p>
            <p> I&#39;ve always been passionate about tech especially computer hardware, Minecraft coding for
                spigot is what originally got me into programming.</p>
            <br></br>

            <p>I have a small spigot plugin that I occasionally add features to, currently one of the noteable
                features is the localchat.
                The link to the spigot plugin is here
                <br></br>
                <a className={blueLinkCss} href="https://github.com/kelson8/KBP">https://github.com/kelson8/KBP</a>
                <br></br>
                I haven&#39;t updated this in a while though and don&#39;t plan on it.
            </p>

            <br></br>
            <p>I have been working on switching the KelsonCraft website from Python Flask to NextJS, and
                working on learning how to make a Minecraft mod with NeoForge for 1.21.1.
            </p>

            <p>Here is a link to my test Minecraft mod on Github, it doesn&#39;t have a release JAR file just
                yet.
                <a className={blueLinkCss}
                   href="https://github.com/kelson8/KCNet-MCMod"> https://github.com/kelson8/KCNet-MCMod</a>
            </p>

            <br></br>
            <p>
                I am pretty decent at coding with Python, and I enjoy messing around with FiveM lua scripts. I
                know a lot of Java, lua, python, html, and css.
            </p>
            <br></br>

            <p>
                I&#39;ve played around with making a basic GTA 5 Script Hook V mod with C#.
                <br></br>
                I have messed with C++ quite a bit, and have made some mods
                for GTA 5, San Andreas and some other Grand Theft Auto games using it.
            </p>
            <br></br>

        </div>
    )
}

/**
 * About the website, displays on about page.
 */
function AboutWebsite() {
    return (
        <div className="p-6">
            <p>This website is hosted with NextJS. </p>

            <p>It is licensed under AGPLv3, so anyone is free to use the code.</p>

            <p> The code for this website is located here on my Github. </p>
            <a className={blueLinkCss}
               href="https://github.com/kelson8/KelsonCraft-NextJS">https://github.com/kelson8/KelsonCraft-NextJS</a>
        </div>
    )

}

/**
 * Display the list of coding languages that I know, using a Flowbite Tailwind CSS table.
 */
function DisplayCodingAboutTables() {
    return (
        <>
            <br></br>
            <h3 className="text-4xl text-center"> Coding languages that I know </h3>
            <br></br>

            <div
                className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Language
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Description
                        </th>
                    </tr>
                    </thead>

                    <tbody>

                    <tr className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            Java
                        </th>
                        <td className="px-6 py-4">
                            This is where I really started coding and probably what really got me into tech.
                            Back in 2013 I started becoming interested in Spigot coding for Minecraft.
                        </td>
                    </tr>

                    <tr className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            Python
                        </th>
                        <td className="px-6 py-4">
                            I have messed around with Python quite a bit and have made a ton of small
                            scripts and stuff with it. I might eventually publish them, but I had some files that I
                            can&#39;t publically share in the repo.
                        </td>
                    </tr>

                    <tr className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            Lua
                        </th>
                        <td className="px-6 py-4">
                            I have mostly messed around with FiveM scripts using lua, it&#39;s not a bad scripting
                            language to get stuff done quickly.
                        </td>
                    </tr>

                    <tr className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            Web dev (Html, CSS, Javascript, Typescript)
                        </th>
                        <td className="px-6 py-4">
                            I know enough Html and CSS to build a basic website.
                            Also, I&#39;m decent at Javascript/Typescript and have pretty much rebuilt my website with
                            Typescript and NextJS.
                        </td>
                    </tr>

                    <tr className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            C#
                        </th>
                        <td className="px-6 py-4">
                            I have messed around with ImGui, GTA 5 modding and other game mods in C#.
                        </td>
                    </tr>

                    <tr className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            C++
                        </th>
                        <td className="px-6 py-4">
                            I have been learning quite a bit of C++ using SFML for game development and using ImGui to
                            mess around with.
                            Although, it has been a little while since I have last done a project or anything with C++.
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AboutPage;
