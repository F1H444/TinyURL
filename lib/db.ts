// Simple in-memory storage
// NOTE: Data will be lost when the server restarts

const globalForDb = globalThis as unknown as {
    urlMap: Map<string, string>
};

const urlMap = globalForDb.urlMap || new Map<string, string>();

if (process.env.NODE_ENV !== 'production') globalForDb.urlMap = urlMap;

export const db = {
    set: (key: string, value: string) => urlMap.set(key, value),
    get: (key: string) => urlMap.get(key),
    has: (key: string) => urlMap.has(key),
};
