import React from 'react'
import {MainContainer} from "@/components/main-container";
import {containerPageClass, testPagesEnabled} from "@/util/constants";
import {SidebarTest} from "@/components/sidebar-test";
import DisabledPage from "@/components/disabled-page";

// Side bar testing page with Flowbite.
// TODO Fix this to work with my current CSS setup.

const SidebarTestPage = () => {
    if (!testPagesEnabled) {
        return (
            <div>
                <DisabledPage/>
            </div>
        )
    }

    return (
        <div>
            <MainContainer pageHeader="Sidebar test" headerColor="text-indigo-500">
                <SidebarTest/>
            </MainContainer>
        </div>

    );
}

export default SidebarTestPage;
