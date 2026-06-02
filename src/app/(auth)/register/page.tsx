import React from 'react'
import {MainContainer} from "@/components/main-container";
import {authRoutesEnabled, containerPageClass} from "@/util/constants";

import {UserModel, UserStat} from "@/util/user-db";
import DisabledPage from "@/components/disabled-page";


// TODO Setup a register page.
// For now, this automatically registers a test user.
// I will setup a form later.

// TODO Move this elsewhere.
// TODO Setup a form to register with.

// https://www.reddit.com/r/nextjs/comments/1nuamlt/how_i_got_prisma_working_smoothly_in_nextjs_15/
export async function CreateUser(username: string, email: string, plainPassword: string) {
    // const posts = await prisma.user.findMany({username: ""});

    const userDb = new UserModel();

    // TODO Make this check if the user exists first, or it'll cause errors.
    // const user = await prisma.user.create({
    // upsert checks if the item already exists in the DB.
    // https://stackoverflow.com/questions/74345992/prisma-data-exists-or-not
    // const user = await prisma.user.upsert({
    //     where: {email: email},
    //     update: {},
    //
    //     create: {
    //         username: username,
    //         email: email,
    //         //     TODO HASH THIS!!
    //         password: plainPassword,
    //     }
    // })

    const user = await userDb.CreateUserInDb(username, email, plainPassword);

    const currentUser = userDb.GetUserStat(username, UserStat.USERNAME);

    // const currentUser = await prisma.user.findFirst({
    //         where: {
    //             email: email,
    //         }
    //     }
    // )

    // Check if the user doesn't exist first, if so register them.
    if (!currentUser) {
        return (
            <>

                <h1 className="text-4xl text-center text-indigo-500 text-bold">User {user.username} registered</h1>

                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>

            </>
        )
        // If the user already exists, give a register error.
    } else {
        return (
            <>
                <h1 className="text-center text-red-500">Error</h1>
                <p>User with {user.username} and {user.email} already exists!</p>
            </>
        );
    }
}

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

                        {CreateUser("admin", "admin@test.com", "Testpassword1")}
                    </div>
                </MainContainer>
            </div>
        );
    }
}

export default RegisterPage;
