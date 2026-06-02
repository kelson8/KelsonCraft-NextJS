import {prisma} from "@/lib/prisma";
import {UserWhereUniqueInput} from "@/generated/prisma/models/User";
import {logger} from "@/lib/logger";

import { PasswordHash } from "@/util/password-hashing";

// TODO Fix this to work, once I get this working I should nearly be prepared to setup BetterAuth.
// I was going to use NextAuth, but I can do local logins with BetterAuth.

// I got this working with the login routes, this has not been tested in here.

// https://www.firdausng.com/posts/integrating-better-auth-better-sqlite3-drizzle-pnpm

// async function SetupTestUser(username: string, email: string, plainPassword: string) {
//     // Create a new user with a post
//
//     const user = prisma.user.upsert({
//         where: {email: email},
//         update: {},
//
//         create: {
//
//             // const user = await prisma.user.create({
//             //     data: {
//             username: username,
//             email: email,
//             // TODO Setup hashing, this is just a quick test.
//             password: plainPassword
//             // posts: {
//             //     create: {
//             //         title: "Hello World",
//             //         content: "This is my first post!",
//             //         published: true,
//             //     },
//             // },
//             // },
//             // include: {
//             //     posts: true,
//             // },
//         }
//     });
//     console.log("Created user:", user);
//
//     // Get a specific user
//     // const getCurrentUser = await (prisma.user.findFirst({
//     //     where: {
//     //         email: email,
//     //     }
//     // }))
//     //
//     // console.log(getCurrentUser);
// }
//
// SetupTestUser("admin", "test@test.com", "testPassword1")
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });

//----
// Taken from my internal KCNet-Vite project
//----

/**
 * Stat for the user, such as ID, username and role.
 */
export enum UserStat {
    ID,
    USERNAME,
    EMAIL,
    ROLE,
    PASSWORD,
    CREATED_AT,
    // TIME_ZONE,
    // TIME_FORMAT
}


export class UserModel {
    /**
     * Create a database user with Prisma.
     * This actually works! Tested in app.ts.
     * TODO Make this check for duplicate keys
     * @param username The username to create.
     * @param email The email for the user.
     * @param password The password for the user, gets hashed with bcrypt-ts for DB storage.
     * Disabled below params.
     * @param time_zone User time zone, such as EST/EDT.
     * @param time_format Time format such as 12h or 24h.
     */
    // async CreateUserInDb(username: string, email: string, password: string, time_zone: string, time_format: string) {
    async CreateUserInDb(username: string, email: string, password: string) {

        const hashPassword = new PasswordHash();

        // Only ever store the hashed password.
        const hashedPassword = await hashPassword.hashPassword(password);

        // const user = await prisma.user.create({
        const user = await prisma.user.upsert({
            where: {email: email},
            update: {},

            create: {
                    username: username,
                    email: email,
                    password: hashedPassword,
                    // time_zone: time_zone,
                    // time_format: time_format
                },
        });

        return user;

        // Log the user for debugging, disabled.
        // console.log(user);
    }

    /**
     * This should check anything, such as the username and password
     * @param component The component to check, such as username, email or others.
     * @param value The key value to check, such as username, email and others.
     */
    // async DoesUserComponentExist(component: string, value: string) {
    async DoesUserComponentExist(component: UserStat, value: string) {
        let valueToCheck = <UserWhereUniqueInput>{};
        switch (component) {
            case UserStat.USERNAME:
                valueToCheck = { username: value };
                break;
            case UserStat.EMAIL:
                valueToCheck = { email: value };
                break;
            default:
                logger.error("[DoesUserComponentExist]: User component not valid!");
                valueToCheck = { username: "" }
                break;
        }

        const componentToCheck = await prisma.user.findUnique({
            where: valueToCheck
        });

        if (!componentToCheck) {
            return false;
        }

        return true;
    }

    /**
     * Get the users role
     * @param username The username to check the role for.
     */
    async GetUserRole(username: string) {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
                role: "BASIC"
            }
        });

        console.log(user?.role);
    }

    /**
     * Get the users info from the database
     * @param username The username to get the info for.
     * @param stat The stat from the UserStat enum to look for.
     * @returns The stat from the username.
     */
    async GetUserStat(username: string, stat: UserStat) {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            }
        });

        switch (stat) {
            case UserStat.ID:
                // logger.debug(user?.id);
                return user?.id;
            case UserStat.USERNAME:
                // logger.debug(user?.username);
                return user?.username;
            case UserStat.EMAIL:
                // logger.debug(user?.email)
                return user?.email;
            case UserStat.ROLE:
                // logger.debug(user?.role);
                return user?.role;
            case UserStat.PASSWORD:
                // logger.debug(user?.password);
                return user?.password;
            case UserStat.CREATED_AT:
                // logger.debug(user?.created_at);
                return user?.created_at;

            // case UserStat.TIME_ZONE:
            //     // logger.debug(user?.time_zone);
            //     return user?.time_zone;
            // case UserStat.TIME_FORMAT:
            //     // logger.debug(user?.time_format);
            //     return user?.time_format;

            default:
                // logger.debug("Error, invalid user stat.");
                break;
        }
    }

    /**
     * Display all of the users in the DB.
     */
    async FindAllUsers() {
        const users = await prisma.user.findMany();
        console.log(users);
    }
}