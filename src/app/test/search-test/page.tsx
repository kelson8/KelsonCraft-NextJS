import React from 'react'
import {MainContainer} from "@/components/main-container";
import {containerPageClass, testPagesEnabled} from "@/util/constants";
import {SearchTest} from "@/components/search-test";
import DisabledPage from "@/components/disabled-page";

// Search testing page with Flowbite.

const SearchTestPage = () => {

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
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Search</h1>
                <br></br>

                <div
                    className={containerPageClass}>
                    <SearchTest />
                </div>
            </MainContainer>
        </div>

    );
}

export default SearchTestPage;
