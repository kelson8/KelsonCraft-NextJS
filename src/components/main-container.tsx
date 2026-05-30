import React from 'react';
import { Footer } from '@/app/partials/footer';
import NavbarPage from "@/app/partials/navbar";
import {containerClass} from "@/util/constants";

interface MainContainerProps {
    children: React.ReactNode;
}

export function MainContainer({children }: MainContainerProps) {
    return (
        <>

            <NavbarPage />
            <div className="p-4 sm:p-6 lg:p-8 dark:bg-gray-800 bg-white">
                <br></br>
                <br></br>
                <div className={containerClass}>
                    {children}
                </div>
            </div>

            <Footer/>
        </>
    )
}