"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {blogUrl, wikiUrl} from "@/util/constants";

// TODO Make text aligned to the left like it originally was.
// TODO Cleanup this navbar and add the login/logout buttons.

/**
 * Display a navbar link in the navbar.
 * @param linkUrl The url to redirect to, such as '/video-player'.
 * @param linkTitle The navbar link title, such as 'Videos'.
 */
function NavbarLink(linkUrl: string, linkTitle: string) {
    return (
        <Link
            href={linkUrl}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400
            transition-colors duration-200 font-medium py-2 px-3 rounded-md">
            {linkTitle}
        </Link>
    )
}

/**
 * Display a navbar link in the navbar for mobile users.
 * @param linkUrl The url to redirect to, such as '/video-player'.
 * @param linkTitle The navbar link title, such as 'Videos'.
 */
function MobileNavbarLink(linkUrl: string, linkTitle: string) {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
    // const { data: session, status } = useSession(); // Get session data

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Link
            onClick={toggleMenu}
            href={linkUrl}
            className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 w-full">
            {linkTitle}
        </Link>
    )
}

/**
 * Display the logo that also redirects back to the home page for the navbar.
 */
function DisplayLogoForNavbar() {
    return (
    <Link href="/" className="text-2xl font-bold text-rose-600 dark:text-rose-400 shrink-0">
        {/* Display the KelsonCraft Logo */}
        <Image
            src="/android-chrome-192x192.png"
            width={40}
            height={40}
            alt="KelsonCraft Logo"
        />
    </Link>
    )
}

// const Navbar = () => {
export function NavbarPage() {
    // TODO Move this out of here, it should only be in a ToggleMobileNavbar function.
    // I don't think this currently does anything in here.
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
    // const { data: session, status } = useSession(); // Get session data

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 shadow-md p-4 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Branding/Logo */}
                <DisplayLogoForNavbar />

                {/* Mobile menu button */}
                {/* TODO Move this out of here, it should only be in a ToggleMobileNavbar function.*/}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
                        {isOpen ? (
                            // Close icon (X)
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li>
                        {NavbarLink("/", "Home")}
                        {NavbarLink("/about", "About")}
                        {NavbarLink(wikiUrl, "Wiki")}
                        {NavbarLink(blogUrl, "Blog")}
                        {NavbarLink("/video-player", "Videos")}
                        {/*{NavbarLink("/projects", "Projects")}*/}
                    </li>
                    {/*{status === 'authenticated' && ( // Only show if authenticated*/}
                    <>
                        {/* <li>
                <Link
                  href="/dashboard"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 px-3 rounded-md"
                >
                  Dashboard
                </Link>
              </li> */}
                        {/*<li>*/}
                        {/*    <Link*/}
                        {/*        href="/admin"*/}
                        {/*        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 px-3 rounded-md"*/}
                        {/*    >*/}
                        {/*        Admin*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/* <li>
                <Link
                  href="/admin/status_checker"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 px-3 rounded-md"
                >
                  Status Checker (Admin)
                </Link>
              </li> */}
                    </>
                    {/*)}*/}
                    {/*{status === 'loading' ? (*/}
                    {/*    <li className="text-gray-500 dark:text-gray-400">Loading...</li>*/}
                    {/*) : (*/}
                    {/*    // <li>*/}
                    {/*    //     {status === 'authenticated' ? (*/}
                    {/*    //         <button*/}
                    {/*    //             onClick={() => signOut({ callbackUrl: '/' })}*/}
                    {/*    //             className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"*/}
                    {/*    //         >*/}
                    {/*    //             Sign Out ({session?.user?.name})*/}
                    {/*    //         </button>*/}
                    {/*    //     ) : (*/}
                    {/*    //         <Link*/}
                    {/*    //             href="/auth/signin"*/}
                    {/*    //             className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"*/}
                    {/*    //         >*/}
                    {/*    //             Sign In*/}
                    {/*    //         </Link>*/}
                    {/*    //     )}*/}
                    {/*    // </li>*/}
                    {/*)}*/}
                </ul>
            </div>

            {/* Mobile Menu (conditionally rendered) */}
            {/*
        - md:hidden: Hides this menu on medium screens and up.
        - bg-white dark:bg-gray-800: Background.
        - shadow-lg: Stronger shadow for the dropdown.
        - transition-all duration-300 ease-in-out: Smooth animation.
        - transform: If isOpen, translateY(0), else translateY(-100%).
      */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col items-center py-4 space-y-4 text-center">
                    <li>
                        {MobileNavbarLink("/", "Home")}
                        {MobileNavbarLink("/about", "About")}
                        {MobileNavbarLink(wikiUrl, "Wiki")}
                        {MobileNavbarLink(blogUrl, "Blog")}
                        {MobileNavbarLink("/video-player", "Videos")}
                        {/*{MobileNavbarLink("/projects", "Projects")}*/}

                    </li>

                    {/*{status === 'authenticated' && (*/}
                    {/*    <>*/}
                    {/* <li>
                <Link
                  onClick={toggleMenu}
                  href="/dashboard"
                  className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 w-full"
                >
                  Dashboard
                </Link>
              </li> */}
                    {/*<li>*/}
                    {/*    <Link*/}
                    {/*        onClick={toggleMenu}*/}
                    {/*        href="/admin"*/}
                    {/*        className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 w-full"*/}
                    {/*    >*/}
                    {/*        Admin*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    {/* <li>
                <Link
                  onClick={toggleMenu}
                  href="/admin/status_checker"
                  className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 w-full"
                >
                  Status Checker (Admin)
                </Link>
              </li> */}
                    {/*</>*/}
                    {/*)}*/}
                    {/*{status === 'loading' ? (*/}
                    {/*    <li className="text-gray-500 dark:text-gray-400">Loading...</li>*/}
                    {/*) : (*/}
                    {/*    <li>*/}
                    {/*        {status === 'authenticated' ? (*/}
                    {/*            <button*/}
                    {/*                onClick={() => { signOut({ callbackUrl: '/' }); toggleMenu(); }} // Close menu on sign out*/}
                    {/*                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-lg w-full"*/}
                    {/*            >*/}
                    {/*                Sign Out ({session?.user?.name})*/}
                    {/*            </button>*/}
                    {/*        ) : (*/}
                    {/*            <Link*/}
                    {/*                onClick={toggleMenu}*/}
                    {/*                href="/auth/signin"*/}
                    {/*                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-lg w-full"*/}
                    {/*            >*/}
                    {/*                Sign In*/}
                    {/*            </Link>*/}
                    {/*        )}*/}
                    {/*</li>*/}
                    {/*)}*/}
                </ul>
            </div>
        </nav>

    )

}

export default NavbarPage;
