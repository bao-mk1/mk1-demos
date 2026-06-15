const repoName = "mk1-demos";
const demoPath = "shinonome-body-peeling";
const basePath = `/${repoName}/${demoPath}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
