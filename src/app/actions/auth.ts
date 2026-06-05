"use server";

// https://youtu.be/x4hQ2Hmuy3k?t=1173

// This might be useful to look into
// https://github.com/better-auth/better-auth/issues/3401

// https://better-auth.com/docs/authentication/email-password

// TODO Use zod for schema verification for this.

import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import {headers} from "next/headers";
import {prisma} from "@/lib/prisma";

/**
 * Register the user
 * TODO Make this give an error if the name and email already exist.
 */
export async function SignupAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const doesUserExist = await prisma.user.findUnique(
        {where: {email: email}});

    if(doesUserExist) {
        return;
    }

    await auth.api.signUpEmail({
        body: {
            name: name,
            email: email,
            password: password,
        }
    });

    redirect("/");
}

/**
 * Sign in the user
 * TODO Return an error instead of a 500 error when email and password is invalid.
 */
export async function SignInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // try {
    //     const res = await auth.api.signInEmail({
    //             body: {
    //                 email: email,
    //                 password: password,
    //                 // callbackURL: "/dashboard"
    //             },
    //         });
    //
    //     console.log("signInEmail response:", JSON.stringify(res));
    //
    //     // const hasUser = !!(res && (res.user || res.session || res.data));
    //     // if (!hasUser) {
    //     //     return { success: false, message: "Invalid email or password" };
    //     // }
    //
    //     redirect("/dashboard");

    // } catch (err: any) {
    //     return {success: false, message: err?.message ?? "Sign in failed"}
    // }
    
    await auth.api.signInEmail({
        body: {
            email: email,
            password: password,
            // callbackURL: "/dashboard"
        },
    },

    );

    redirect("/dashboard");
}

/**
 * Sign out the user
 */
export async function SignoutAction() {
    await auth.api.signOut({
            headers: await headers()
        }
    );

    redirect("/");
}