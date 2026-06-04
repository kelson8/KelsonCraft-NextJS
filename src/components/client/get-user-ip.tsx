"use client";

import {useEffect, useState} from "react";
import cookies from "browser-cookies";

// https://reacthustle.com/blog/nextjs-get-user-ip

// Get the user IP on the client.

export const GetUserIp = () => {
    const [ip, setUserIp] = useState<string>("");

    // TODO Fix this to work, useEffect gives an error but works for now.
    // https://react.dev/learn/you-might-not-need-an-effect
    // const ip = useMemo(() => {
    //     const userIp = cookies.get("user-ip") ?? "";
    //
    //     console.log("User IP: " + userIp);
    //     return userIp;
    // }, []);

    useEffect(() => {
        const userIp = cookies.get("user-ip") ?? "";
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUserIp(userIp);

        console.log("IP: " + userIp);
    }, []);

    return ip;
};