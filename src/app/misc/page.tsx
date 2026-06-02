import React from 'react'
import {MainContainer} from "@/components/main-container";
import {blueLinkCss, containerPageClass, miscPagesJsonFile} from "@/util/constants";
import {TestForm} from "@/components/test-form";
import Link from "next/link";
import {ReadWebpageJsonFile} from "@/components/read-json-files";

// Misc pages

// The page list gets generated from the miscPagesJsonFile that is setup in constants.ts

const MiscPage = () => {

    //ReadWebpageJsonFile
    return (
        <div>
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Misc</h1>
                <br></br>

                <div className={containerPageClass}>
                    <p className="text-center">Misc pages for this website</p>

                    {ReadWebpageJsonFile(miscPagesJsonFile)}
                </div>
            </MainContainer>
        </div>

    );
}

export default MiscPage;
