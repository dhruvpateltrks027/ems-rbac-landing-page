/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["swagger-ui-react"],
  output: "export",       // Generate static out/ folder
  trailingSlash: true,    // Required for static export SPA routing
};

module.exports = nextConfig;