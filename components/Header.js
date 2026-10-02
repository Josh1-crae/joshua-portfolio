"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">Joshua<span>.</span></Link>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${active ? "active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
