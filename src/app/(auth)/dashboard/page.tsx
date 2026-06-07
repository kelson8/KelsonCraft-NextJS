import React from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, blueButtonClass, containerPageClass, mainHeaderClass} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import Link from "next/link";
import {SignoutAction} from "@/app/actions/auth";

// https://www.reddit.com/r/nextjs/comments/1nuamlt/how_i_got_prisma_working_smoothly_in_nextjs_15/

const DashboardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });


    if (!authRoutesEnabled) {
        return (
            <DisabledPage/>
        );


    } else {
        // Page enabled, user not logged in
        // Now this page always redirects to /login since I set it up in the proxy.ts, but I'll keep this here just in case.
        if (!session) {
            return (
                <div>

                    <MainContainer pageHeader="Login required" headerColor="text-indigo-500">
                        <br></br>

                        <Link href="/login" className={blueButtonClass}>Sign In</Link>
                        <Link href="/register" className={blueButtonClass}>Sign Up</Link>
                    </MainContainer>
                </div>
            )
        } else {
            return (
                <div>
                    <MainContainer pageHeader="Dashboard" headerColor="text-indigo-500">
                        <h1 className={mainHeaderClass}>Welcome to the dashboard</h1>

                        <p> User ID: {session.user.id}</p>
                        <p> User Email: {session.user.email}</p>
                        <p> User Name: {session.user.name}</p>

                        <p> User created on: {session.user.createdAt.toString()}</p>

                        <br></br>

                        <form action={SignoutAction}>
                            <button type="submit" className={blueButtonClass}>Sign Out</button>
                        </form>

                    </MainContainer>
                </div>
            );
        }
    }


}

export default DashboardPage;
