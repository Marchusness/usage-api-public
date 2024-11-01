import { WebhookData } from "./types";
import { ENCRYPTION_ALGORITHM } from "./webhookConstants";

// Encrypt Function (server-side only if signing with private key)
export async function signWebhook(privateKeyBase64: string, data: WebhookData) {
    const dataString = JSON.stringify(data);

    const privateKey = await crypto.subtle.importKey(
        'pkcs8',
        Buffer.from(privateKeyBase64, 'base64'),
        ENCRYPTION_ALGORITHM,
        true,
        ['sign']
    );

    const signature = await crypto.subtle.sign(
        ENCRYPTION_ALGORITHM,
        privateKey,
        new TextEncoder().encode(dataString)
    );

    return {
        dataString,
        signature: Buffer.from(signature).toString('base64'),
    };
}