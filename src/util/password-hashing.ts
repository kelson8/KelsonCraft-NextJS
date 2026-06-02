
// https://www.npmjs.com/package/bcrypt-ts
import { genSaltSync, hashSync, compare, compareSync, hash, getSalt, genSalt } from 'bcrypt-ts';
import {isProd} from "@/util/constants";
// import { isProd, testPassword } from '../config.js';

// https://github.com/pauldenver/generate-api-key
// console.log(generateApiKey({ method: 'string', length: 32 }));

// Hash a password with bcrypt



// TODO Setup this to get bcrypt hashed values from a mysql database.

export class PasswordHash {
    /**
     * Hash a password with bcrypt-ts
     * @param password The password to hash
     * @returns The hashed result for the password.
     */
    async hashPassword(password: string) {
        // const salt = genSaltSync(10);
        const salt = await genSalt(10);
        // const result = hashSync(password, salt);
        const result = await hash(password, salt);

        return result;
    }

    /**
     * Verify a password against a bcrypt hash.
     * @param passwordToVerify The password to check
     * @param hashedPassword The hash for the password to check.
     * @returns If the password matches the hash.
     */
    async verifyPassword(passwordToVerify: string, hashedPassword: string) {
        // Password hash for the password 'Test'
        // const hash = "$2b$10$iWl.irEV4jwxCZ3eYdzQ9OyXQg27ePL8uBqkzkfuzipDfD1PUYdku";
        const passwordVerified = await compare(passwordToVerify, hashedPassword);

        // if(compareSync(passwordToVerify, hashedPassword)) {
        if (passwordVerified) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Test logging the password hash
     * Disabled
     * @param password The password to display the hash for.
     */
    // export async function logPasswordTestHash(password: string) {
    // async logPasswordTestHash() {
    //
    //     // Do nothing if this is running in production mode, this will prevent the hashed password being shown.
    //     if (isProd) {
    //         return;
    //     }
    //
    //     // console.log(`Hashed password: ${hashPassword(password)}`);
    //     const hash = "$2b$10$iWl.irEV4jwxCZ3eYdzQ9OyXQg27ePL8uBqkzkfuzipDfD1PUYdku";
    //     // const hash = "$2b$10$iWl.irEV4jwxCZ3eYdzQ9OyXQg27ePL8uBqkzkfuzipDfD1PUYdk";
    //
    //     // Verify the test password against the hash.
    //     const verifiedPassword = await this.verifyPassword(`${testPassword}`, hash);
    //     if (verifiedPassword) {
    //         // console.log(`Password hash: ${hash}`)
    //         // console.log("Password matches, login succeeded.");
    //     } else {
    //         // console.log("Invalid password, login failed.");
    //     }
    // }
}


