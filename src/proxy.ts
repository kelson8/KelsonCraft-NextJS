import {NextRequest, NextResponse} from "next/server";

// Obtained from here
// https://reacthustle.com/blog/nextjs-get-user-ip

// So far, this just sets the user-ip in the cookies.
// TODO Make this not store the user-ip in the cookies, I don't like that idea.

// Instead of middleware.ts, Next.Js 16 uses proxy.ts.

export async function proxy(request: NextRequest) {
    const res = NextResponse.next();
    // let ip = request.ip ?? request.headers.get('x-real-ip')
    let ip = request.headers.get('x-real-ip');
    const forwardedFor = request.headers.get('x-forwarded-for');

    if(!ip && forwardedFor){
        ip = forwardedFor.split(',').at(0) ?? 'Unknown';
    }

    // Set the user-ip in the cookies
    if(ip){
        res.cookies.set("user-ip", ip, {
            httpOnly: false,
        });
    }

    return res;
}