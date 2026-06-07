// "use client";

// import React, {useState} from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, containerPageClass} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {LoginForm} from "@/components/auth/login-form";
import Link from "next/link";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

// TODO Fix this to work properly.

const LoginPage = async () => {
// const LoginPage = () => {
    // const router = useRouter();
    // const [error, setError] = useState<string | null>(null);

    // https://nextjs.org/docs/app/guides/redirecting
    // Well this cannot be used an async function.
    // const router = useRouter();

    // Well this doesn't properly work, it stores the session but it expires with the cookie
    // and isn't cached anymore for some reason.
    // const session = await auth.api.getSession({
    //     headers: await headers(),
    //     // headers: React.use(headers()),
    // });

    if (!authRoutesEnabled) {
        return (
            <DisabledPage/>
        );
    } else {
        // if(!session) {


        return (
            <div>
                <MainContainer pageHeader="Login" headerColor="text-indigo-500">
                    <LoginForm/>

                    <br></br>
                    <p>Don&#39;t have an account? Click <Link href="/register">Here</Link> to register</p>

                </MainContainer>
            </div>
        );
        // } else {
        //     return (
        //         <div>
        //             <MainContainer>
        //                 <h1 className="text-4xl text-center text-indigo-500 text-bold">Logged in</h1>
        //                 <br></br>
        //
        //                 <div
        //                     className={containerPageClass}>
        //                     <p></p>
        //
        //                     <p>Click <Link href="/dashboard">Here</Link> to go to the dashboard</p>
        //
        //                 </div>
        //
        //             </MainContainer>
        //
        //         </div>
        //     )
        // }
    }
}

export default LoginPage;
