/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = () => {
    const rewrites = () => {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5000/:path*",
        },
      ];
    };
    return {
      rewrites,
    };
  };

export default nextConfig;
