"use client";

import {useEffectEvent, useState} from "react";
import {footerLinkCss, websiteAuthor, websiteCopyrightInfo, websiteSourceUrl} from "@/util/constants";

export function Footer() {
    // const currentYear = new Date().getFullYear();

    // This is what sets the copyright year, I don't think I even need the useEffectEvent.
    const [year, setYear] = useState(new Date().getFullYear());
    //
    // const setupYear = useEffectEvent(() => {

    // Fix for an error with this.
    // This doesn't seem to be doing anything.
    // https://medium.com/@maroobsyed/error-calling-setstate-synchronously-within-an-effect-can-trigger-cascading-renders-7e6fb9d971b2
    // useEffectEvent(() => {
        // Update the year when the component mounts
        // setYear(new Date().getFullYear());
    // });

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