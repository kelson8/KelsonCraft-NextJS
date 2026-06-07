"use client";
import React, {useState} from 'react'
import {MainContainer} from "@/components/main-container";
import {blueButtonClass, containerPageClass} from "@/util/constants";
import {GenerateRandomPassword} from "@/util/password-generator";

// import {Button, Checkbox, Label, TextInput} from "flowbite-react";

// import { generatePassword } from 'generate-password-in-client-side';

// Password generator testing.

// https://github.com/shahadathhs/generate-password


// Well I got this working with "use client" and useState.
// TODO Fix this to get the password complexity such as adding letters, numbers and the length from an html form.

const PasswordGeneratorTestPage = () => {
    // const [useSpecialChars, setUseSpecialChars] = useState<boolean>(false);
    // const [useUppercase, setUseUppercase] = useState<boolean>(true);
    // const [useLowercase, setUseLowercase] = useState<boolean>(true);
    // const [useNumbers, setUseNumbers] = useState<boolean>(false);
    // const [useSymbols, setUseSymbols] = useState<boolean>(false);


    const [randomPassword, setRandomPassword] = useState<string | string[]>();
    const [passwordLength, setPasswordLength] = useState<number>(16);

    // TODO Make this get length from an html form
    // const passwordLength = 16;
    // const randomPassword1 = generatePassword({
    //     length: passwordLength,
    //     useNumbers: useNumbers,
    //     useUppercase: useUppercase,
    //     useLowercase: useLowercase,
    //     useSymbols: useSymbols,
    // })

    // const newRandomPassword = GenerateRandomPassword(passwordLength, useSpecialChars, useUppercase, useLowercase, useNumbers, useSymbols);
    const newRandomPassword = GenerateRandomPassword(passwordLength);

    const setPassword = () => {
        if (newRandomPassword !== "") {
            setRandomPassword(newRandomPassword);
        }
        // } else {
        //     console.log("Generated password is blank.")
        // }
    }

    // Log the output for testing.
    // console.log(randomPassword);
    return (
        <div>
            <MainContainer pageHeader="Password generator" headerColor="text-indigo-500">
                <button className={blueButtonClass} onClick={() => setPassword()}>
                    Generate Random password
                </button>
                <p className="p-2">Random password: {randomPassword}</p>

                {/* Password generator checkboxes */}


                {/*<div className="flex items-center mb-4">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        checked={useSpecialChars}*/}
                {/*        onChange={setUseSpecialChars}*/}
                {/*        value=""*/}
                {/*        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>*/}
                {/*    <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">*/}
                {/*        Use special chars*/}
                {/*    </label>*/}
                {/*</div>*/}


                {/*<div className="flex items-center">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        checked={useUppercase}*/}
                {/*        onChange={setUseUppercase}*/}
                {/*        value=""*/}
                {/*        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>*/}
                {/*    <label htmlFor="checked-checkbox" className="select-none ms-2 text-sm font-medium text-heading">*/}
                {/*        Use capital letters*/}
                {/*    </label>*/}
                {/*</div>*/}
                {/*<div className="flex items-center">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        checked={useLowercase}*/}
                {/*        onChange={setUseLowercase}*/}
                {/*        value=""*/}
                {/*        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>*/}
                {/*    <label htmlFor="checked-checkbox" className="select-none ms-2 text-sm font-medium text-heading">*/}
                {/*        Use lowercase letters*/}
                {/*    </label>*/}
                {/*</div>*/}

                {/*<div className="flex items-center">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        checked={useNumbers}*/}
                {/*        onChange={setUseNumbers}*/}
                {/*        value=""*/}
                {/*        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>*/}
                {/*    <label htmlFor="checked-checkbox" className="select-none ms-2 text-sm font-medium text-heading">*/}
                {/*        Use numbers*/}
                {/*    </label>*/}
                {/*</div>*/}

                {/*<div className="flex items-center">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        checked={useSymbols}*/}
                {/*        onChange={setUseSymbols}*/}
                {/*        value=""*/}
                {/*        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>*/}
                {/*    <label htmlFor="checked-checkbox" className="select-none ms-2 text-sm font-medium text-heading">*/}
                {/*        Use symbols*/}
                {/*    </label>*/}
                {/*</div>*/}
            </MainContainer>
        </div>

    );
}

export default PasswordGeneratorTestPage;
