import { PathToObjectMapper } from "../types";

export async function typedFetch<P extends keyof PathToObjectMapper>(
  apiKey: string,
  request: PathToObjectMapper[P]["request"],
  path: P,
  usageStoreApiKey?: string,
): Promise<PathToObjectMapper[P]["response"]> {
  try {
    const response = await fetch(`https://api.usageapi.com${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...(usageStoreApiKey !== undefined ? {
          "X-Usage-Store-Authorization": `Bearer ${usageStoreApiKey}`,
        } : {}),
      },
      cache: "no-cache",
      body: JSON.stringify(request),
    });

    return response.json() as Promise<PathToObjectMapper[P]["response"]>;
  } catch (error) {
    return {
      success: false,
      message: "FETCH_ERROR",
      debugMessage: (error as { message: string }).message,
    };
  }
}
