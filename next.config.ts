import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
