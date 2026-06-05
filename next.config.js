// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages deploys to /repo-name — set NEXT_PUBLIC_BASE_PATH in the
  // GitHub Actions workflow. Remove this env var when using a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
}

module.exports = nextConfig
