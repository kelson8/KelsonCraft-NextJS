import {PasswordHash} from "@/util/password-hashing";
import {prisma} from "@/lib/prisma";
import {UserModel, UserStat} from "@/util/user-db";

// https://nextjsstarter.com/blog/nextjs-api-routes-get-and-post-request-examples/

// https://www.wisp.blog/blog/nextjs-15-api-get-and-post-request-examples

export async function POST(req: Request, res: Response) {
    const passwordHash = new PasswordHash();
    const userDb = new UserModel();


    const formData = await req.formData()

    // Get the form values.
    const username = formData.get('username')?.toString();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    // Fixes an error for the hashedPassword variable.
    if (typeof password !== "string") {
        return;
    }
    // Hash the password for DB storage.
    const hashedPassword = await passwordHash.hashPassword(password);

    // Make sure everything was entered.
    if (!username || !email || !hashedPassword) {
        // return res.status(401).send({error: "Invalid username or password"});
        return Response.json({error: "Username, email, and password is required"});
    }

    // Check if the user is in the DB
    const currentUser = await userDb.GetUserStat(username, UserStat.USERNAME);
    const currentEmail = await userDb.GetUserStat(username, UserStat.EMAIL);

    console.log(currentUser);

    // Give an error if the username or email already exists, so this doesn't continue.
    if (currentUser !== undefined || currentEmail !== undefined) {
        return Response.json({error: "Email or username already exists!"});
    }


    // const newUser =

    // Create the database user.
    await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword
        }
    });

    return Response.json({username, email, hashedPassword});
}

// I can use prisma for my db with this
/*
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return new Response(JSON.stringify(newUser), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

 */