import React from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, containerPageClass} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {UserModel, UserStat} from "@/util/user-db";
import {username} from "better-auth/plugins";
import {PasswordHash} from "@/util/password-hashing";

// TODO Setup a login page.

export async function LoginUser(username: string, password: string) {
    const userDb = new UserModel();
    const passwordHash = new PasswordHash();

    const currentUser = userDb.GetUserStat(username, UserStat.USERNAME);
    const passwordInDb = userDb.GetUserStat(username, UserStat.PASSWORD);
    const hashedPassword = passwordHash.verifyPassword(password, String(passwordInDb))

    // Check if the user doesn't exist first, if not then give an error.
    if (!currentUser) {
        return (
            <>
                <h1 className="text-center text-red-500">Error</h1>
                <p>The user with that username and email already exist!</p>
                {/*<h1 className="text-4xl text-center text-indigo-500 text-bold">User {user.username} registered</h1>*/}

                {/*<p>Username: {user.username}</p>*/}
                {/*<p>Email: {user.email}</p>*/}

            </>
        )

        // If the user already exists, give a register error.

    } if(!hashedPassword) {
        return (
            <>
                <h1 className="text-center text-red-500">Error</h1>
                <p>Invalid password!</p>
            </>
        )
    }

    else {
        return (
            <>
                <h1 className="text-center">Logged in</h1>
                <p>You have been logged in!</p>
            </>
        );
    }
}

const LoginPage = () => {


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
                        <p>Not implemented yet!</p>
                    </div>
                </MainContainer>
            </div>

        );
    }
}

export default LoginPage;
