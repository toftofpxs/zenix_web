'use client'

import { content } from '@/data/content'

export default function Footer() {
  return (
    <footer className="section-divider py-10">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <a href="#" className="inline-flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-sm">z.</span>
          <span className="font-medium tracking-tight">Zenix Studio</span>
        </a>

        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">{content.footer.copyright}</p>

        <div className="flex items-center gap-6">
          {content.footer.links.map((link) => (
            <a key={link.href} href={link.href} className="mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
