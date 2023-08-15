/** @type {import('next').NextConfig} */
const nextConfig = {
    server: {
        port: 2000,
        host: '0.0.0.0',
        timing: false
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/my-bucket/**',
            },
        ],
    },
}

module.exports = nextConfig
