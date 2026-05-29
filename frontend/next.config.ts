import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into ./out — no Node server needed.
  output: "export",
  // Generate /about/index.html etc. so nginx can serve folders directly.
  trailingSlash: true,
  // No server-side image optimization in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
