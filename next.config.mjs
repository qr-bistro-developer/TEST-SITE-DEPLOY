import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d191sdiqrxs6vs.cloudfront.net",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Alias getAccessToken ไปยังไฟล์ที่ถูกต้องตาม environment
    config.resolve.alias["@store/cookies/getAccessToken"] = path.resolve(
      __dirname,
      `src/store/cookies/getAccessToken.${isServer ? "server" : "client"}.js`
    );
    return config;
  },
};

export default nextConfig;
