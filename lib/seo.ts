import type { Metadata } from 'next'

// Page-level `openGraph` replaces the layout's rather than merging into it,
// so url/siteName have to be restated per page. This helper keeps that —
// and the canonical, which shares the same path — in one place.
export const SITE_NAME = 'Hotel JuJu'

export interface PageSeo {
  /** Exported path, with trailing slash to match `trailingSlash: true`. */
  path: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export function pageSeo({
  path,
  title,
  description,
  image,
  imageAlt,
}: PageSeo): Pick<Metadata, 'alternates' | 'openGraph'> {
  return {
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: image, alt: imageAlt }],
    },
  }
}
