// https://github.com/vercel/next.js/discussions/55037

// This works for getting the users IP on the server.
// https://github.com/vercel/next.js/discussions/55037
import {headers} from "next/headers";
import {logger} from "@/lib/logger";

/**
 * Get the users ip from the server.
 * @param pageAccessed The page to display as accessed, such as home, or anything else.
 */
export async function LogUserIp(pageAccessed: string) {
    const header = await headers();
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    logger.info(pageAccessed + " accessed by: " + ip);

    // Just make this return a blank tag for now, seems to get rid of the errors
    return (
        <>
    {/*//         <p> pageAccessed accessed by: {ip} </p>*/}
       </>
    )
}

