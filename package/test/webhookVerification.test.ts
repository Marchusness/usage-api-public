
import { generateAsymmetricKeyPair, signWebhook, verifySignature, verifyWebhookRequest, WebhookData } from "../src/webhook";

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
});