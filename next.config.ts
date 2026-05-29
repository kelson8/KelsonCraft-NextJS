import type { NextConfig } from "next";

// Set the default dev server IP here.
const devServerIp = process.env.HOST || '192.168.1.109';

const nextConfig: NextConfig = {
  /* config options here */
};

// Set up the default dev server IP to be allowed in the dev origins.
module.exports = {
    allowedDevOrigins: [devServerIp],
}


export default nextConfig;
