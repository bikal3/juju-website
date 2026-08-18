// Prefix local image paths with basePath. The site is served from a custom
// domain (see public/CNAME), so NEXT_PUBLIC_BASE_PATH is unset and this is a
// no-op today; it stays so a project-page deploy (/repo-name/) still works.
// NEXT_PUBLIC_ variables are inlined at build time for static exports.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function imgSrc(path: string): string {
  return `${BASE_PATH}${path}`
}
