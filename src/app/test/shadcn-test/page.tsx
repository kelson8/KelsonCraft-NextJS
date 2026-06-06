import React from 'react'
import {MainContainer} from "@/components/main-container";
import {containerPageClass, testPagesEnabled} from "@/util/constants";
import DisabledPage from "@/components/disabled-page";
import {Button} from "@/components/ui/button";
import {ArrowUpIcon} from "lucide-react";

// Shadcn UI Testing.

const ShadcnUiTestPage = () => {

    // if(!testPagesEnabled) {
    if(true) {
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
                <h1 className="text-4xl text-center text-indigo-500 text-bold">ShadCN UI Library test</h1>
                <br></br>

                <div
                    className={containerPageClass}>

                    <Button>Test</Button>

                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                        <Button variant="outline">Button</Button>
                        <Button variant="outline" size="icon" aria-label="Submit">
                            <ArrowUpIcon />
                        </Button>
                    </div>
                </div>
            </MainContainer>
        </div>

    );
}

export default ShadcnUiTestPage;
