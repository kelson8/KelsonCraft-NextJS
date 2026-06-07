import React from 'react'
import {MainContainer} from "@/components/main-container";
import {containerPageClass, testPagesEnabled} from "@/util/constants";
// import {TestForm} from "@/components/test-form";
import DisabledPage from "@/components/disabled-page";

// Form testing page with Flowbite

const FormTestPage = () => {

    if(!testPagesEnabled) {
        return (
            <div>
                <DisabledPage />
            </div>
        )
    }

    return (
        <div>
            <MainContainer pageHeader="Form Test" headerColor="text-indigo-500">
                <div
                    className={containerPageClass}>
                    {/*<FormTestPage />*/}
                    {/*<TestForm />*/}
                </div>
            </MainContainer>
        </div>

    );
}

export default FormTestPage;
