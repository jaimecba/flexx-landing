import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.52"],
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Excluir backend da compilação
    config.externals.push({
      typeorm: "typeorm",
      pg: "pg",
      "reflect-metadata": "reflect-metadata",
    });

    return config;
  },
};

export default nextConfig;