import React from 'react';
import { Footer } from '../partials/footer';
import NavbarPage from "@/app/partials/navbar";

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
                <div className="container mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-lg m-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
                    {children}
                </div>
            </div>

            <Footer/>
        </>
    )
}