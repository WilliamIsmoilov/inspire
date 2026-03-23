import type { NextConfig } from "next";
const { output } = require('three/src/nodes/core/PropertyNode.js');
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n,
  env: {
    
  }
};

export default nextConfig;
