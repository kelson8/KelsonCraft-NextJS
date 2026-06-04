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
            <MainContainer>
                <br></br>
                <h1 className="text-4xl text-center text-indigo-500 text-bold">IP Address</h1>
                <br></br>

                <div className={containerPageClass}>
                    {/*<p className="text-center"></p>*/}
                    <p className="text-center">Your ip: {ip}</p>
                </div>
            </MainContainer>
        </div>

    );
}

export default GetIpPage;





