import type { NextConfig } from "next";
import withPWA from "next-pwa";

const repo = "gagana-sahayi"; // 👈 matches your repo name
const isProd = process.env.NODE_ENV === "production";
const usingGhPages = Boolean(process.env.GITHUB_PAGES);
const basePath = usingGhPages ? `/${repo}` : "";

const withPwa = withPWA({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default withPwa(nextConfig);