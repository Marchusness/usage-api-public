import { ENCRYPTION_ALGORITHM } from "./webhookConstants";

export async function generateAsymmetricKeyPair() {
    const keyPair = await crypto.subtle.generateKey(
        {
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            ...ENCRYPTION_ALGORITHM
        },
        true,
        ['sign', 'verify']
    );

    const publicKey = await crypto.subtle.exportKey('spki', keyPair.publicKey);
    const privateKey = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);

    return {
        publicKey: Buffer.from(publicKey).toString('base64'),
        privateKey: Buffer.from(privateKey).toString('base64'),
    };
}