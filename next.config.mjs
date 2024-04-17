/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ootd.slashonline.com'
            }
        ],
    },
};

export default nextConfig;
