import React from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, containerPageClass} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {RegisterForm} from "@/components/auth/register-form";

// https://www.reddit.com/r/nextjs/comments/1nuamlt/how_i_got_prisma_working_smoothly_in_nextjs_15/

const RegisterPage = () => {

    if(!authRoutesEnabled) {
        return (
            <DisabledPage />
        );
    } else {
        return (
            <div>
                <MainContainer>
                    <br></br>
                    <h1 className="text-4xl text-center text-indigo-500 text-bold">Register</h1>
                    <br></br>

                    <div
                        className={containerPageClass}>

                        <RegisterForm />
                    </div>
                </MainContainer>
            </div>
        );
    }
}

export default RegisterPage;
