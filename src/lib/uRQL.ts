import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: import.meta.env.VITE_URL,
  exchanges: [ssrCache, fetchExchange, cacheExchange, dedupExchange],
});

export {client, ssrCache};