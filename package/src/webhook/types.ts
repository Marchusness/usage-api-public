
export type UsageDoc = {
    blocked: number;
    rateLimited: number;
    unauthenticated: number;
    auth: number;
    recorded: number;
    usageRecords: Record<string, number>;
}

export type WebhookData = {
    project: string;
    usageStore: string;
    usage: UsageDoc;
}

export function isUsageDoc(data: any): data is UsageDoc {
    const baseKeys = ['blocked', 'rateLimited', 'unauthenticated', 'auth', 'recorded', 'usageRecords'];
    if (typeof data !== 'object') return false;
    if (Object.keys(data).length !== baseKeys.length) return false;
    if (!baseKeys.every(key => key in data)) return false;
    if (typeof data.blocked !== 'number') return false;
    if (typeof data.rateLimited !== 'number') return false;
    if (typeof data.unauthenticated !== 'number') return false;
    if (typeof data.auth !== 'number') return false;
    if (typeof data.recorded !== 'number') return false;
    if (typeof data.usageRecords !== 'object') return false;
    if (!Object.values(data.usageRecords).every(val => typeof val === 'number')) return false;
    return true;
}

export function isWebhookData(data: any): data is WebhookData {
    const baseKeys = ['project', 'usageStore', 'usage'];
    if (typeof data !== 'object') return false;
    if (Object.keys(data).length !== baseKeys.length) return false;
    if (!baseKeys.every(key => key in data)) return false;
    if (typeof data.project !== 'string') return false;
    if (typeof data.usageStore !== 'string') return false;
    if (!isUsageDoc(data.usage)) return false;
    return true;
}