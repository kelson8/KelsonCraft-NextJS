"use client";

import React, {useState} from 'react';
import Link from 'next/link';

// TODO Make text aligned to the left like it originally was.
// TODO Cleanup this navbar and add the login/logout buttons.

// const Navbar = () => {
export function NavbarPage() {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
    // const { data: session, status } = useSession(); // Get session data

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

    <nav className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 shadow-md p-4 z-50">
        <div className="container mx-auto flex items-center justify-between">
            {/* Branding/Logo */}
            <Link href="/" className="text-2xl font-bold text-rose-600 dark:text-rose-400 shrink-0">
                KelsonCraft
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
                    {isOpen ? (
                        // Close icon (X)
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center space-x-6">
                <li>
                    <Link
                        href="/"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 px-3 rounded-md"
                    >
                        Home
                    </Link>
                    <Link
                        href="/video-test"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 px-3 rounded-md"
                    >
                        Videos
                    </Link>
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
                    <Link
                        onClick={toggleMenu} // Close menu on click
                        href="/"
                        className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 w-full"
                    >
                        Home
                    </Link>

                    <Link
                        onClick={toggleMenu} // Close menu on click
                        href="/video-test"
                        className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 w-full"
                    >
                        Videos
                    </Link>

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
