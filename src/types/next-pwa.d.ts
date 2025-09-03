declare module "next-pwa" {
  import type { NextConfig } from "next";

  type HandlerName =
    | "NetworkFirst"
    | "StaleWhileRevalidate"
    | "CacheFirst"
    | "NetworkOnly"
    | "CacheOnly";

  /** Minimal Workbox-style shape for what we use in next.config.ts */
  interface RuntimeCachingEntry {
    urlPattern:
      | RegExp
      | string
      | ((opts: { request: Request; url: URL }) => boolean);
    handler: HandlerName;
    options?: Record<string, unknown>;
  }

  interface PWAOptions {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    runtimeCaching?: RuntimeCachingEntry[];
    buildExcludes?: string[];
  }

  export default function withPWA(
    opts?: PWAOptions
  ): (config: NextConfig) => NextConfig;
}
