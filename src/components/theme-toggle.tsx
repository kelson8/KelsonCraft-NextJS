"use client"
// import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {ThemeScript} from "@/components/theme-script";
import {useTheme} from "next-themes";
import {useState} from "react";


// import cn from "@/util/class-merge";

// TODO Fix this to store the state, I have it in the main-container.tsx.

export function ThemeToggle() {
    // Initialize isDark to null or undefined
    // It will be set in useEffect after document.documentElement.classList is ready.
    const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

    //
    // const { theme, resolvedTheme, setTheme } = useTheme();
    // https://dev.to/mr_tux/how-to-implement-darklight-mode-with-no-flickers-in-nextjs-1blj
    const { resolvedTheme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
    //

    // useEffect to synchronize 'isDark' state with the actual theme set by ThemeScript
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const currentThemeIsDark = document.documentElement.classList.contains("dark");
    //         setIsDark(currentThemeIsDark);
    //     }
    // }, []);

    //
    // https://sujalvanjare.vercel.app/blog/how-to-add-dark-mode-in-nextjs-16-with-tailwind-css-v4-typescript
    // Only compute theme after mount
    // const effectiveTheme =
    //     mounted && theme === "system" && resolvedTheme
    //         ? resolvedTheme
    //         : mounted
    //             ? theme
    //             : null;

    // const nextTheme = effectiveTheme === "dark" ? "light" : "dark";
    //
    // const label = effectiveTheme ? `Switch to ${nextTheme} mode` : "Toggle theme";
    //
    // const toggleTheme = () => {
    //     if (!mounted || !nextTheme) return;
    //     setTheme(nextTheme);
    // };
    //

    const toggleTheme = () => {
        setIsDark(resolvedTheme !== "dark");
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    // useEffect(() => {
    //     if (typeof window !== 'undefined' && isDark !== undefined) {
    //         if (isDark) {
    //             document.documentElement.classList.add("dark");
    //             localStorage.setItem('darkmode', 'enabled');
    //         } else {
    //             document.documentElement.classList.remove("dark");
    //             localStorage.setItem('darkmode', 'disabled');
    //         }
    //     }
    // }, [isDark]);
    //
    // if (isDark === undefined) {
    //     return null;
    // }

    return (
        <button
            id="darkModeButton"
            onClick={() =>
                toggleTheme()
                }
            // className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-colors"
            className="flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 rounded-full fixed bottom-2 right-2"
        >
            {/* This spans shows ONLY in light mode */}
            <FaSun className="block dark:hidden"></FaSun>
                {/*<span className="block dark:hidden">Switch to Dark Mode</span>*/}

            {/* This spans shows ONLY in dark mode */}
            {/*<span className="hidden dark:block">Switch to Light Mode</span>*/}
            <FaMoon className="block dark:block"></FaMoon>
        </button>

    // return (
    //     <>
    //         <button id="darkModeButton"
    //                 // title={label}
    //                 // aria-label={label}
    //                 // aria-pressed={effectiveTheme === "dark"}
    //                 className="flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 rounded-full fixed bottom-2 right-2"
    //                 // disabled={!mounted}
    //                 // onClick={toggleTheme}
    //                 onClick={() => {
    //                     // Toggle the state directly
    //                     setIsDark(prevIsDark => !prevIsDark);
    //                 }}>
    //
    //
    //             {isDark ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
    //             <span>{isDark ? "Dark" : "Light"}</span>
    //         </button>
    //     </>
    )
}