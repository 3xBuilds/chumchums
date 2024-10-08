/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['jlema-raffle-storage.s3.amazonaws.com'],
        unoptimized: true,
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
        ]
    },
    reactStrictMode: false,

};

export default nextConfig;
