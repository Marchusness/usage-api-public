let cryptoModule: Crypto;

export async function getCryptoModule() {
    if (cryptoModule) {
        return cryptoModule;
    }

    if (typeof window !== 'undefined' && window.crypto) {
        cryptoModule = window.crypto;
    } else {
        const { webcrypto } = await import('crypto');
        cryptoModule = webcrypto as unknown as Crypto;
    }

    return cryptoModule;
}

export const SALT_LENGTH = 32;

export const ENCRYPTION_ALGORITHM = {
    name: 'RSA-PSS',
    hash: 'SHA-256',
    saltLength: SALT_LENGTH,
};