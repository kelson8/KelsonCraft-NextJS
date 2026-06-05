import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {prisma} from "@/lib/prisma";
import {nextCookies} from "better-auth/next-js"; // your drizzle instance

import { rateLimiter } from "better-auth-rate-limiter";

// https://better-auth.com/docs/installation

// https://www.prisma.io/docs/guides/authentication/better-auth/nextjs
// https://www.youtube.com/watch?v=x4hQ2Hmuy3k

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "mysql", "sqlite"
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies(),
        // https://dev.to/lutz-grex/extending-better-auth-with-global-rate-limiting-2g98

        // Setup the max requests for the rate limiter here.
        rateLimiter({
            window: 60,       // Time window in seconds
            max: 100,         // Max requests per window
            storage: "memory",
            detection: "ip",
        }),
    ],

    // Added for session caching
    // https://better-auth.com/docs/concepts/session-management
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // Cache duration in seconds (5 minutes)
            strategy: "compact" // or "jwt" or "jwe"
        }
    },



    // trustedOrigins: ["http://localhost:3001"],
});