"use client"
// import { useEffect, useState } from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

import * as React from "react"
import {Moon, Sun} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// import cn from "@/util/class-merge";

// TODO Fix the errors in this

/**
 * Theme toggle with Shadcn
 * https://ui.shadcn.com/docs/dark-mode/next
 * TODO Make this look like the old button.
 */
export function ThemeToggle() {
    return (
        <>
            <DarkModeToggleShadcn/>

            {/*<DarkModeToggleButton />*/}

            {/* I made a get theme function. */}
            {/*<p>Your current theme: {GetCurrentTheme()}</p>*/}
        </>
    )
}

function DarkModeToggleShadcn() {
    const {setTheme} = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 rounded-full fixed bottom-2 right-2"
                    variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

/**
 * This displays the current theme.
 */
function GetCurrentTheme() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true);
    }, [])

    const {theme} = useTheme();

    // return theme;

    // This fixes the hydration error
    return (
        <>
            {isClient ? theme : ""}
        </>

    )
}

/**
 * Dark mode toggle button without shadcn
 */
function DarkModeToggleButton() {
    //     // Initialize isDark to null or undefined
//     // It will be set in useEffect after document.documentElement.classList is ready.
    const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

    // https://dev.to/mr_tux/how-to-implement-darklight-mode-with-no-flickers-in-nextjs-1blj
    const { resolvedTheme, setTheme } = useTheme();

    // useEffect to synchronize 'isDark' state with the actual theme set by the local storage.
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // const currentThemeIsDark = document.documentElement.classList.contains("dark");
            const currentTheme = localStorage.getItem('theme');

            if(currentTheme === "light") {
                setIsDark(false);
                // setThemeNew("light");

                // document.documentElement.classList.toggle('dark', theme === 'dark');
            } else if (currentTheme === "dark") {
                setIsDark(true);
                // setThemeNew("dark")
            }
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(resolvedTheme !== "dark");
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    return (
        <button id="darkModeButton"
            // title={label}
            // aria-label={label}
            // aria-pressed={effectiveTheme === "dark"}
                className="flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 rounded-full fixed bottom-2 right-2"
            // disabled={!mounted}
            // onClick={toggleTheme}
                onClick={() => {
                    // Toggle the state directly
                    // setIsDark(prevIsDark => !prevIsDark);
                    toggleTheme();
                }}>

            {/*{theme === 'dark' ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}*/}

            {isDark ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
            <span>{isDark ? "Dark" : "Light"}</span>
            {/*<span>{theme === 'dark' ? "Dark" : "Light"}</span>*/}
        </button>
    )

}