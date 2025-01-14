
import { UsageDoc } from "../src/types";
import { generateAsymmetricKeyPair, signWebhook, verifyWebhookRequest, WebhookData } from "../src/webhook";
import { verifySignature, WEBHOOK_SIGNATURE_HEADER } from "../src/webhook/verifyWebhook";

describe("Test webhook signing and verification", () => {
    it("should be able to generate valid public and private keys", async () => {
        const {
            privateKey,
            publicKey,
        } = await generateAsymmetricKeyPair()

        expect(privateKey).toBeDefined();
        expect(publicKey).toBeDefined();
    });

    it("Should be able to sign then verify a request", async () => {
        const {
            privateKey,
            publicKey,
        } = await generateAsymmetricKeyPair()

        const {
            dataString,
            signature,
        } = await signWebhook(privateKey, {
            somethingThatNeedsToBeSigned: "hello",
        } as unknown as WebhookData);

        expect(dataString).toBeDefined();
        expect(signature).toBeDefined();

        const verified = await verifySignature(publicKey, dataString, signature);

        expect(verified).toBe(true);
    });

    it("Should not be able to verify an incorrect request", async () => {
        const {
            privateKey,
            publicKey,
        } = await generateAsymmetricKeyPair()

        const {
            dataString,
            signature,
        } = await signWebhook(privateKey, {
            somethingThatNeedsToBeSigned: "hello",
        } as unknown as WebhookData);

        expect(dataString).toBeDefined();
        expect(signature).toBeDefined();

        const verified = await verifySignature(publicKey, "something else", signature);

        expect(verified).toBe(false);
    });

    it("Should not be able to parse the request", async () => {
        const {
            privateKey,
            publicKey,
        } = await generateAsymmetricKeyPair()

        const {
            dataString,
            signature,
        } = await signWebhook(privateKey, {
            project: "",
            usageStore: "",
            usage: {
                hourStartTimestamp: 0,
                usageRecords: {
                    "testing-route": 1,
                },
                op_recorded: 0,
                op_blocked: 0,
                op_unauthenticated: 0,
                op_authenticated: 0,
                op_store_returned: 0,
                ad_create_key: 0,
                ad_del_key: 0,
                ad_del_key_not_found: 0,
                ad_get_usage: 0,
                ad_set_store: 0
            } satisfies UsageDoc,
        } satisfies WebhookData);

        const webhookRequest = new Request("https://example.com", {
            method: "POST",
            body: dataString,
            headers: {
                [WEBHOOK_SIGNATURE_HEADER]: signature,
            },
        });

        const data = await verifyWebhookRequest(publicKey, webhookRequest);

        expect(data).toBeDefined();
    });


});