import React from 'react'
import {MainContainer} from "@/components/main-container";
import DisplayPageList from "@/components/display-page-list";
import {miscPagesJsonFile} from "@/util/constants";

// Misc pages

// The page list gets generated from the miscPagesJsonFile that is setup in constants.ts

const MiscPage = () => {
    return (
        <div>
            <MainContainer>
                {DisplayPageList("Misc", "Misc pages for this website", miscPagesJsonFile)}
            </MainContainer>
        </div>
    );
}

export default MiscPage;
