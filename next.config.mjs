/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/mi-portafolio" : "",
  assetPrefix: isGithubPages ? "/mi-portafolio/" : "",
  trailingSlash: true,
};

export default nextConfig;
