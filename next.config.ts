import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.52"],
  webpack: (config) => {
    config.externals.push(
      "typeorm",
      "pg",
      "reflect-metadata",
      "bcryptjs",
      "jsonwebtoken"
    );
    return config;
  },
};

export default nextConfig;