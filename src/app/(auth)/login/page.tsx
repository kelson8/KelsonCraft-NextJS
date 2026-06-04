"use client";

import React, {useState} from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, containerPageClass} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {LoginForm} from "@/components/auth/login-form";
import Link from "next/link";
import {useRouter} from "next/router";

// TODO Fix this to work properly.

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    if(!authRoutesEnabled) {
        return (
            <DisabledPage />
        );
    } else {
        return (
            <div>
                <MainContainer>
                    <br></br>
                    <h1 className="text-4xl text-center text-indigo-500 text-bold">Login</h1>
                    <br></br>

                    <div
                        className={containerPageClass}>
                        <LoginForm />

                        <br></br>
                        <p>Don&#39;t have an account? Click <Link href="/register">Here</Link> to register</p>

                    </div>
                </MainContainer>
            </div>

        );
    }
}

export default LoginPage;
