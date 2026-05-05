/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_PUBLIC_BASE_PATH
    ? { basePath: process.env.NEXT_PUBLIC_BASE_PATH }
    : {}),
};

export default nextConfig;