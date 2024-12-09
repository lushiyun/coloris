"use client";

import { cn } from "@/lib/helpers/cn";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/sample", label: "Sample" },
  { href: "/collection", label: "Collection" },
];

export function Nav() {
  return (
    <nav className="flex items-center gap-x-3 text-sm">
      {NAV_LINKS.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "font-base text-[var(--neutral-11)] transition-colors hover:text-[var(--neutral-12)]",
        isActive && "font-medium text-[var(--neutral-12)]",
      )}
    >
      {children}
    </Link>
  );
}
