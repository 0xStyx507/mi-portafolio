/** @type {import('next').NextConfig} */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = configuredBasePath || (process.env.GITHUB_ACTIONS === "true" ? "/mi-portafolio" : "");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
};

export default nextConfig;
