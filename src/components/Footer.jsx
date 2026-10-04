import React from 'react'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8
             5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.8 5 3.2
             5 3.2a5.3 5.3 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5
             a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/hassan-hesham',              Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-hesham-b54bb8426', Icon: LinkedinIcon },
]

export default function Footer() {
  return (
    <footer className="bg-m3-surface-container border-t border-m3-outline-variant">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div>
          <p className="m3-title-sm text-m3-on-surface">
          HZ<span className="text-m3-primary">.</span>
          </p>
          <p className="m3-body-sm text-m3-on-surface-variant mt-0.5">
            © {new Date().getFullYear()} Hassan Zaki. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <nav className="flex items-center gap-2" aria-label="Social links">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="m3-icon-btn"
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
