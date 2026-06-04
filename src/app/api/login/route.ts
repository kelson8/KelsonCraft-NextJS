import {PasswordHash} from "@/util/password-hashing";
import {prisma} from "@/lib/prisma";
import {UserModel, UserStat} from "@/util/user-db";
import {logger} from "@/lib/logger";

// https://nextjsstarter.com/blog/nextjs-api-routes-get-and-post-request-examples/

// https://www.wisp.blog/blog/nextjs-15-api-get-and-post-request-examples

// TODO Fix this to work as a login page, for now it is using the register page as a base.

// TODO Look into this, it might help me out with users and other stuff.
// https://github.com/Ngoe333/nextjs-auth-prisma/blob/main/src/components/form/SignInForm.tsx

// I almost got this working, now I just need to hook it up to something.
// It doesn't store the user login state and just shows some json messages for now.

export async function POST(req: Request, res: Response) {
    const passwordHash = new PasswordHash();
    const userDb = new UserModel();

    const formData = await req.formData()

    // Get the form values.
    const username = formData.get('username')?.toString();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    // Make sure everything was entered.
    if(!username || !email || !password) {
        // return res.status(401).send({error: "Invalid username or password"});
        return Response.json({error: "Username, email, and password is required"});
    }

    // Check if the user is in the DB
    const currentUser = await userDb.GetUserStat(username, UserStat.USERNAME);
    const currentEmail = await userDb.GetUserStat(username, UserStat.EMAIL);
    const currentPassword = await userDb.GetUserStat(username, UserStat.PASSWORD);

    // logger.debug(`Current User: ${currentUser}`);
    // logger.debug(`Current Email: ${currentEmail}`);

    // Give an error if the username or email already exists, so this doesn't continue.
    if(currentUser === undefined || currentEmail === undefined) {
        return Response.json({error: "Email or username doesn't exist!"});
    }

    const isEmailValid = email === currentEmail;
    const isUsernameValid = username === currentUser;

    // logger.debug(`Does email exist?: ${isEmailValid}`);
    // logger.debug(`Does username exist?: ${isUsernameValid}`);

    if (!isEmailValid || !isUsernameValid) {
        return Response.json({error: "Email or username doesn't exist!"});
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const isPasswordValid = await passwordHash.verifyPassword(password, currentPassword);

    // logger.debug(`Is password valid: ${isPasswordValid}`);

    //
    // if(isPasswordValid) {
    if(isEmailValid && isUsernameValid && isPasswordValid) {
        logger.debug(`User '${currentUser}' has logged in with email '${currentEmail}'`);
        return Response.json({error: "Logged in!"});
    }


    // return Response.json({username, email});
    // return Response.json({test: "?"})
    return Response.json({error: "Invalid credentials."});
}
