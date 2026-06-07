import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {prisma} from "@/lib/prisma";
import {nextCookies} from "better-auth/next-js"; // your drizzle instance

// import { rateLimiter } from "better-auth-rate-limiter";

import { captcha } from "better-auth/plugins";

import { haveIBeenPwned } from "better-auth/plugins"
import Redis from "ioredis";
import {redisStorage} from "@better-auth/redis-storage";
import {dockerContainerName, dockerEnabled} from "@/util/constants";

//------
// Useful links
//------

// https://better-auth.com/docs/installation

// https://www.prisma.io/docs/guides/authentication/better-auth/nextjs
// https://www.youtube.com/watch?v=x4hQ2Hmuy3k

// This will be useful for admin users
// https://better-auth.com/docs/plugins/admin

// Redis storage
// https://better-auth.com/docs/concepts/database#redis-storage

// NextJS integration
// https://better-auth.com/docs/integrations/next

// Have I been pwned plugin
// https://better-auth.com/docs/plugins/have-i-been-pwned

const redis = new Redis({
    // TODO Fix this to use the docker host if docker is enabled in the .env.
    // host: process.env.REDIS_HOST,
    host: dockerEnabled ? dockerContainerName: process.env.REDIS_HOST,
    port: 6379,
    // TODO Fix this, it gives a type error.
    // port: process.env.REDIS_PORT,
})

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "mysql", "sqlite"
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        nextCookies(),

        // For password security, I might enable this.
        // haveIBeenPwned({
        //     enabled: process.env.NODE_ENV === "production",
        // }),

        // https://better-auth.com/docs/plugins/captcha
        // I could use this later for the public deployment of my website.
        // captcha({
        //     provider: "cloudflare-turnstile", // or google-recaptcha, hcaptcha, captchafox
        //     secretKey: process.env.TURNSTILE_SECRET_KEY!,
        // }),

        // https://dev.to/lutz-grex/extending-better-auth-with-global-rate-limiting-2g98

        // Setup the max requests for the rate limiter here.
        // rateLimiter({
        //     window: 60,       // Time window in seconds
        //     max: 100,         // Max requests per window
        //     storage: "memory",
        //     detection: "ip",
        // }),
    ],

    // For Redis and caching logins.
    // TODO Add a toggle for this
    secondaryStorage: redisStorage({
        client: redis,
        keyPrefix: "better-auth:", // optional, defaults to "better-auth:"
    }),

    // TODO Test this later, switched from the rateLimiter plugin to this since it's built in.
    // https://better-auth.com/docs/concepts/rate-limit
    rateLimit: {
        window: 60,
        max: 100,
        storage: "memory",
    },

    // Added for session caching
    // https://better-auth.com/docs/concepts/session-management
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // Cache duration in seconds (5 minutes)
            // Change to 60 seconds, to make this not cache as long.
            // maxAge: 60, // Cache duration in seconds (1 minute)
            strategy: "compact" // or "jwt" or "jwe"
        }
    },

    // https://better-auth.com/docs/authentication/github
    // Not in use.
    // socialProviders: {
    //     github: {
    //         clientId: process.env.GITHUB_CLIENT_ID as string,
    //         clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    //     },
    // },



    // trustedOrigins: ["http://localhost:3001"],
});