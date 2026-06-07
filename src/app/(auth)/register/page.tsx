import React from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, containerPageClass} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {BetterAuthRegister} from "@/components/auth/register-form";

// https://www.reddit.com/r/nextjs/comments/1nuamlt/how_i_got_prisma_working_smoothly_in_nextjs_15/

// TODO Add config option to just disable the register page later.

const RegisterPage = () => {

    if (!authRoutesEnabled) {
        return (
            <DisabledPage/>
        );
    } else {
        return (
            <div>
                <MainContainer pageHeader="Register" headerColor="text-indigo-500">
                    <BetterAuthRegister/>
                </MainContainer>
            </div>
        );
    }
}

export default RegisterPage;
