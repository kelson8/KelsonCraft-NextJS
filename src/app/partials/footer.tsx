"use client";

import {useEffectEvent, useState} from "react";

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
            {/*<footer className="text-center">&#xA9; Copyright {currentYear} kelson8 AGPLv3</footer>*/}
            <footer className="text-center">&#xA9; Copyright {year} kelson8 - KCNet/KelsonCraft AGPLv3</footer>
            <br></br>
        </>
    )
}