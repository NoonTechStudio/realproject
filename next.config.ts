import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All project imagery in this demo is first-party SVG in /public/images.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
