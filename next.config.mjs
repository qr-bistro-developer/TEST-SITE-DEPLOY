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
  turbopack: {},
};

export default nextConfig;
