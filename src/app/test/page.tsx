import React from 'react'
import {MainContainer} from "@/components/main-container";
import DisplayPageList from "@/components/display-page-list";
import {testPagesEnabled, testPagesJsonFile} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";

// Main test page for other items
// By default, this is disabled in the .env with the 'TEST_PAGES' env variable.

const TestPage = () => {

    if(!testPagesEnabled) {
        return (
            <div>
                <DisabledPage />
            </div>
        )
    }

    return (
        <div>
            <MainContainer>
                {DisplayPageList("/test", "Test", "Testing page for the site", testPagesJsonFile)}


            </MainContainer>
        </div>

    );
}

export default TestPage;
