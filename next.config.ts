import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

// Set the default dev server IP here.
const devServerIp = process.env.HOST || '192.168.1.109';

const nextConfig: NextConfig = {
  /* config options here */
};

// Set up the default dev server IP to be allowed in the dev origins.
module.exports = withFlowbiteReact({
    allowedDevOrigins: [devServerIp],
    // This should be disabled when using the prod.Dockerfile.
    // Actually, I don't think this is needed, it works without it in the dev.Dockerfile.
    // output: 'standalone',
})


export default nextConfig;