"use client";

import React from 'react'
import {MainContainer} from "@/components/main-container";
import {GetUserIp} from "@/components/client/get-user-ip";
import {containerPageClass} from "@/util/constants";

// https://stackoverflow.com/questions/68338838/how-to-get-the-ip-address-of-the-client-from-server-side-in-next-js-app
// import requestIp from 'request-ip'

// Get the user IP Address

const GetIpPage = () => {

    const ip = GetUserIp();

    return (
        <div>
            <MainContainer pageHeader="IP Address" headerColor="text-indigo-500">
                <div className={containerPageClass}>
                    {/*<p className="text-center"></p>*/}
                    <p className="text-center">Your ip: {ip}</p>
                </div>
            </MainContainer>
        </div>

    );
}

export default GetIpPage;





