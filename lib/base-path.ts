// Prefix local image paths with basePath so they resolve correctly on
// GitHub Pages (served from /juju-website/) and locally (basePath = '').
// NEXT_PUBLIC_ variables are inlined at build time for static exports.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function imgSrc(path: string): string {
  return `${BASE_PATH}${path}`
}
