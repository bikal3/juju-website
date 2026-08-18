'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { imgSrc } from '@/lib/base-path'
import type { GalleryPhoto } from '@/lib/data'

interface GalleryGridProps {
  photos: GalleryPhoto[]
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  const isOpen = openIndex !== null

  const close = useCallback(() => {
    setOpenIndex(null)
    lastFocused.current?.focus()
  }, [])

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  )

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)

    // Stop the page behind the overlay from scrolling.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, close, step])

  // Position is computed here, where openIndex is known to be a number.
  const active =
    openIndex === null ? null : { ...photos[openIndex], position: openIndex + 1 }

  return (
    <>
      <div
        className={`grid gap-4 ${
          photos.length === 1
            ? 'grid-cols-1 max-w-lg'
            : photos.length === 2
            ? 'grid-cols-1 sm:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
        }`}
      >
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`${photo.alt} — view larger`}
            onClick={(e) => {
              lastFocused.current = e.currentTarget
              setOpenIndex(index)
            }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden bg-card-placeholder group"
          >
            <Image
              src={imgSrc(photo.src)}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
          className="fixed inset-0 z-[80] bg-black/90 flex flex-col items-center justify-center p-4 sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 text-cream text-2xl leading-none px-3 py-1"
          >
            &times;
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                className="absolute left-2 sm:left-6 text-cream text-3xl leading-none px-3 py-2"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                className="absolute right-2 sm:right-6 text-cream text-3xl leading-none px-3 py-2"
              >
                &#8250;
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl flex-1 max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imgSrc(active.src)}
              /* Decorative here: the dialog is labelled with this description
                 and it also appears as a visible caption below. */
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <p className="text-cream text-xs tracking-wide mt-4 text-center max-w-2xl">
            {active.alt}
            <span className="block text-cream/70 mt-1">
              {active.position} of {photos.length}
            </span>
          </p>
        </div>
      )}
    </>
  )
}
