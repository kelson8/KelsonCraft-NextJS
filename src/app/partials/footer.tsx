"use client";

import {footerLinkCss, websiteCopyrightInfo, websiteSourceUrl} from "@/util/constants";

export function Footer() {

    return (
        <>
            <br></br>
            {/*<footer className="text-center">&#xA9; Copyright {year} {websiteAuthor} - KCNet/KelsonCraft AGPLv3</footer>*/}
            <footer className="text-center">{websiteCopyrightInfo}</footer>
            <br></br>
            {/* TODO Add other items to footer later and make this list look nicer. */}
            <a className={footerLinkCss} href={websiteSourceUrl}>Website GitHub</a>
            <br></br>
        </>
    )
}