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
    domains: ['http://72.60.134.219'],
  },
  experimental: {
    webpackBuildWorker: true, 
    parallelServerBuildTraces: true, 
    parallelServerCompiles: true, 
  }
};

export default nextConfig;
