import { isWebhookData } from "./types";
import { ENCRYPTION_ALGORITHM } from "./webhookConstants";

export const WEBHOOK_SIGNATURE_HEADER = 'X-Webhook-Signature';

export async function verifySignature(webhookSecret: string, body: string, signature: string) {
    const publicKey = await crypto.subtle.importKey(
        'spki',
        Buffer.from(webhookSecret, 'base64'),
        ENCRYPTION_ALGORITHM,
        true,
        ['verify']
    );

    const isVerified = await crypto.subtle.verify(
        ENCRYPTION_ALGORITHM,
        publicKey,
        Buffer.from(signature, 'base64'),
        new TextEncoder().encode(body)
    );

    return isVerified;
}

export async function verifyWebhookRequest(webhookSecret: string, request: Request) {
    const body = await request.text();
    const signature = request.headers.get(WEBHOOK_SIGNATURE_HEADER);

    const data = JSON.parse(body);

    if (!isWebhookData(data) || !signature) {
        throw new Error('Invalid data');
    }

    const isVerified = await verifySignature(webhookSecret, body, signature);

    if (!isVerified) {
        throw new Error('Signature verification failed');
    }

    return data;
}