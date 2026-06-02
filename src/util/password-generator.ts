// For now, I'm just going to use a basic password generator function.
// https://www.geeksforgeeks.org/typescript/random-password-generator-using-typescript/
// export function GenerateRandomPassword(length: number, useSpecialChars: boolean,
//                                        useUppercase: boolean, useLowercase: boolean, useNumbers: boolean, useSymbols: boolean ): string {

export function GenerateRandomPassword(length: number) {
    const char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";

    let randomPassword = "";
    for (let i = 0; i < length; i++) {
        const ind = Math.floor(Math.random() * char.length);
        randomPassword += char[ind];
    }

    // Make sure this is valid
    if(randomPassword !== "") {
        return randomPassword;
    }

    return "";

}