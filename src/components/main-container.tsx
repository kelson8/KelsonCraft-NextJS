// "use client"

import React from 'react';
import { Footer } from '@/app/partials/footer';
import NavbarPage from "@/app/partials/navbar";
// import {containerClass} from "@/util/constants";
import {ThemeToggle} from "@/components/theme-toggle";
import {containerPageClass} from "@/util/constants";

interface MainContainerProps {
    children: React.ReactNode;
    headerColor?: string;
    pageHeader: string;
    pageIcon?: React.ReactNode;
}

export function MainContainer({ children, headerColor, pageHeader, pageIcon }: MainContainerProps) {
    return (
        <>
            <NavbarPage />
            <div className="p-4 sm:p-6 lg:p-8 dark:bg-gray-800 bg-white">
                <br></br>
                <br></br>

                {/*<div className={containerClass}>*/}
                <div className={containerPageClass}>
                    {/*<h1 className="text-4xl text-center text-indigo-500 text-bold">{pageHeader}*/}
                    <h1 className={"text-4xl text-center text-bold" + " " + headerColor}>{pageHeader}
                        {pageIcon && pageIcon}</h1>
                    <br></br>
                    {children}
                </div>
            </div>

            <Footer/>
            <ThemeToggle />
        </>
    )
}