import React from 'react'
import {MainContainer} from "@/components/main-container";
// import {ReadVideoJsonFile} from "@/components/read-json-files";
import {containerPageClass} from "@/util/constants";
import {Metadata} from "next";
import AgeEncryption from "@/components/age-encryption";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

// Age encryption test page.

export const metadata: Metadata = {
    title: "Age Encryption",
}

// https://www.npmjs.com/package/age-encryption

async function EncryptionTestPage() {

    const pageIcon = <FontAwesomeIcon icon={faLock}/>

    return (
        <div>
            <MainContainer pageHeader="Age Encryption" pageIcon={pageIcon} headerColor="text-indigo-500">
                <p>Encryption with <a href="https://github.com/FiloSottile/age">Age</a> encryption </p>
                {await AgeEncryption("Test123", "InvalidPublicKey")}
            </MainContainer>
        </div>

    );
}

export default EncryptionTestPage;
