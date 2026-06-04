"use server";

// https://youtu.be/x4hQ2Hmuy3k?t=1173

// This might be useful to look into
// https://github.com/better-auth/better-auth/issues/3401

// TODO Use zod for schema verification for this.

import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import {headers} from "next/headers";

/**
 * Register the user
 */
export async function SignupAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

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
 */
export async function SignInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await auth.api.signInEmail({
        body: {
            email: email,
            password: password,
        }
    });

    redirect("/");
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