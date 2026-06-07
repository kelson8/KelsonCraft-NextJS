import React from 'react'
import {MainContainer} from "@/components/main-container";
import DisplayPageList from "@/components/display-page-list";
import {miscPagesJsonFile} from "@/util/constants";

// Misc pages

// The page list gets generated from the miscPagesJsonFile that is setup in constants.ts

const MiscPage = () => {
    return (
        <div>
            <MainContainer pageHeader="" headerColor="text-indigo-500">
                {/* Display the list of pages for the misc pages from the JSON file. */}
                {DisplayPageList("/misc", "Misc", "Misc pages for this website", miscPagesJsonFile)}

                {/* TODO Try to fix this. */}
                {/*{GetSessionStorage("theme")}*/}


            </MainContainer>
        </div>
    );
}

export default MiscPage;
