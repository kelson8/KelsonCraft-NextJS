"use client";

import React from 'react'
import {MainContainer} from "@/components/main-container";
import {containerPageClass, testPagesEnabled} from "@/util/constants";
// import DisabledPage from "@/components/disabled-page";
import {Button} from "@/components/ui/button";
// import {ArrowUpIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"

import {genSaltSync, hashSync} from "bcrypt-ts";

// import {UserModel} from "@/util/user-db";
// import {logger} from "@/lib/logger";

// Shadcn UI Testing.

// TODO Look into this
// https://better-auth-ui.com/docs/shadcn/integrations/nextjs

const ShadcnUiTestPage = () => {

    // const userModel = new UserModel()
    // const userStat = await userModel.GetUserStat("kelson@t.com");
    // logger.debug("User stat: " + userStat);

    // Well this just breaks this page now.
    // if (!testPagesEnabled) {
    //     return (
    //         <div>
    //             <DisabledPage/>
    //         </div>
    //     );
    // } else {
    //
    // }

    return (
        <div>
            <MainContainer pageHeader="ShadCN UI Library test" headerColor="text-indigo-500">

                {/*<TestButtons/>*/}
                {/*{CreateButton("Submit")}*/}

                <br></br>
                {/*<TestField/>*/}


                {/* TODO Make this get the password from the test field. */}
                {HashPasswordField("test")}

                {/*{TestField}*/}
            </MainContainer>
        </div>

    );
}

type CreateButtonProps = {
    title: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

// const CreateButton = (title: string) => {
const CreateButton: React.FC<CreateButtonProps> = ({
                                                       title, onClick
                                                   }) => {
    return (
        <>
            {/*<Button>Test</Button>*/}
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <Button
                    variant="outline"
                    // onClick={() => {
                    //     console.log("Button clicked");
                    onClick={onClick}
                >{title}</Button>

                {/* TODO Look into this for a back to the top button. */}
                {/*<Button variant="outline" size="icon" aria-label="Submit">*/}
                {/*<ArrowUpIcon/>*/}
                {/*</Button>*/}
            </div>
        </>
    )
}

/**
 * Create a field with Shadcn
 * @param fieldTitle The title
 * @param fieldDescription The description that goes under this.
 * @param fieldPlaceholder The placeholder for the blank text, such as 'password...'
 * @param passwordToHash The plain text password to hash with BCrypt.
 */
const TestField = (fieldTitle: string, fieldDescription: string, fieldPlaceholder: string, passwordToHash: string) => {
    // console.log(passwordToHash);

    return (
        <Field>
            {/* https://ui.shadcn.com/docs/components/radix/input */}
            <FieldLabel htmlFor="input-demo-api-key">{fieldTitle}</FieldLabel>
            <Input id="input-demo-api-key" type="password" placeholder={fieldPlaceholder}/>
            <FieldDescription>
                {fieldDescription}
            </FieldDescription>

            {/*/!* TODO Fix this to change when I change the password, currently it only does one value. *!/*/}
            {/*<CreateButton title="Submit" onClick={() => {*/}
            {/*    console.log("Hashed password: " + passwordToHash);*/}
            {/*}}>*/}
            {/*</CreateButton>*/}
        </Field>
    )
}

/**
 * Password hashing with BCrypt.
 * @param password The plain text password to hash.
 */
const HashPasswordField = (password: string) => {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);

    return (
        <>
            {TestField("Password to hash", "This displays a BCrypt hashed version of the entered password", "password...", hashedPassword)}

            {/* TODO Fix this to change when I change the password, currently it only does one value. */}
            <CreateButton title="Submit" onClick={() => {
                console.log("Hashed password: " + hashedPassword);
            }}></CreateButton>
        </>
    )
}

export default ShadcnUiTestPage;
