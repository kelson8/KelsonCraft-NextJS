import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

// Set the default dev server IP here.
const devServerIp = process.env.HOST || '192.168.1.109';

import createMDX from '@next/mdx'

// Well I fixed the build for the api auth routes by switching better-auth to version 1.6.11
// https://github.com/better-auth/better-auth/issues/9810

const nextConfig: NextConfig = {
  /* config options here */
  // https://github.com/better-auth/better-auth/issues/9810

    // https://nextjs.org/docs/app/guides/mdx
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// Set up the default dev server IP to be allowed in the dev origins.
module.exports = withFlowbiteReact({
    allowedDevOrigins: [devServerIp],
    // This should be disabled when using the prod.Dockerfile.
    // Actually, I don't think this is needed, it works without it in the dev.Dockerfile.
    // output: 'standalone',

    // https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects
    // I didn't know I could define redirects in the next.config.ts.
    async redirects() {
        return [
            {
                source: '/blog1',
                destination: 'https://blog.kelsoncraft.net',
                permanent: false,
            }
        ]
    }
})

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

// Original option
// export default nextConfig;

// Merge MDX config with Next.js config
export default withMDX(nextConfig)