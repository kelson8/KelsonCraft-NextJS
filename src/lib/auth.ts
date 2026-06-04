import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";
import {nextCookies} from "better-auth/next-js"; // your drizzle instance

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
    plugins: [nextCookies()]

    // trustedOrigins: ["http://localhost:3001"],
});