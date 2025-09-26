import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslink: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  images: {
    unoptimized: true, 
  },
  experimental: {
    webpackBuildWorker: true, 
    parallelServerBuildTraces: true, 
    parallelServerCompiles: true, 
  }
};

export default nextConfig;
