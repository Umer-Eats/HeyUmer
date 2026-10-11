/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this folder so a lockfile higher up is ignored.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
