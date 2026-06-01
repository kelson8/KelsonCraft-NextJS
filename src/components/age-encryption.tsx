import * as age from "age-encryption"
import {ageEncryptionRouteEnabled} from "@/util/constants";

// https://www.npmjs.com/package/age-encryption

// TODO Make this accept a public key to encrypt to in a html form.
// Also, add the text to encrypt in a html form with a submit button.
const AgeEncryption = async (textToEncrypt: string, publicKeyToEncryptTo: string) => {



    // Generate random private key and public key
    const identity = await age.generateIdentity();
    const recipient = await age.identityToRecipient(identity);

    // Add public key to the encryption for the ciphertext.
    const e = new age.Encrypter();
    e.addRecipient(recipient);
    const ciphertext = await e.encrypt(textToEncrypt);

    // Convert the encrypted text into something more readable.
    const armored = age.armor.encode(ciphertext)

    // Decrypt the text.
    const d = new age.Decrypter();
    d.addIdentity(identity);
    const out = await d.decrypt(ciphertext, "text");

    if(ageEncryptionRouteEnabled) {
        return (
            <>
                <p>Encryption test</p>

                <p className="p-2"> Random Age private key: {identity} </p>
                <p className="p-2"> Random Age public key: {recipient} </p>
                <p className="p-2"> Encrypted text: {armored}<br></br>  </p>
                <p className="p-2"> Output text: {out} </p>
            </>
        )
    } else {
        return (
            <>
                <p>This page is disabled!</p>
            </>
        )
    }

}

export default AgeEncryption;
