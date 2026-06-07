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
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">Form Test</h1>
                <br></br>

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
