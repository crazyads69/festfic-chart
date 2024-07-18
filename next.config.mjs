/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node$/,
            use: "file-loader",
        });

        return config;
    },
    images: {
        domains: ["localhost"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.wattpad.com",
                port: "",
                pathname: "/cover/**",
            },
        ],
    },
    reactStrictMode: false,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    output: "standalone",
};

export default nextConfig;
