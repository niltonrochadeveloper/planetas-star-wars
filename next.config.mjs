/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cryptospro.com.br",
        port: "",
        pathname: "/planetas/**",
      },
    ],
  },
};

export default nextConfig;
