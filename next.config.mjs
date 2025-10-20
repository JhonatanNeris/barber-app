/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/**", // ou mais específico: "/viniciosneves/code-connect-assets/**"
            },
            {
                protocol: "https",
                hostname: "scc10.com.br",
                pathname: "/**", // ou mais específico: "/viniciosneves/code-connect-assets/**"
            },
        ],
    },
};

export default nextConfig;
