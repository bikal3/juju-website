// First focusable element on every page: lets keyboard and screen-reader users
// jump past the fixed nav straight to the page content.
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-cream focus:text-text-primary focus:px-5 focus:py-3 focus:text-xs focus:tracking-widest focus:uppercase focus:ring-2 focus:ring-gold"
    >
      Skip to main content
    </a>
  )
}
