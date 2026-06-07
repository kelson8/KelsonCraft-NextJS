import React from 'react'
import {MainContainer} from "@/components/main-container";
// import {ReadVideoJsonFile} from "@/components/read-json-files";
import {containerPageClass} from "@/util/constants";
import {Metadata} from "next";
import AgeEncryption from "@/components/age-encryption";

// Age encryption test page.

export const metadata: Metadata = {
    title: "Age Encryption",
}

// https://www.npmjs.com/package/age-encryption

async function EncryptionTestPage() {
    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Age Encryption</h1>
                <br></br>

                <div
                    className={containerPageClass}>
                    {await AgeEncryption("Test123", "InvalidPublicKey")}
                </div>
            </MainContainer>
        </div>

    );
}

export default EncryptionTestPage;
