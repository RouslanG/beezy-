import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslink: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  images: {
    unoptimized: false, 
    domains: ['72.60.134.219'],
  },
  experimental: {
    webpackBuildWorker: true, 
    parallelServerBuildTraces: true, 
    parallelServerCompiles: true, 
  }
};

export default nextConfig;
