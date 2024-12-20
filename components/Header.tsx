"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { LoginDialog } from "./auth/LoginDialog";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MobileNav />
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="hidden md:block">
            <span className="text-xl font-semibold">Microsoft Store</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="#" active={pathname === "/gaming"}>
              Gaming
            </NavLink>
            <NavLink href="#" active={pathname === "/entertainment"}>
              Entertainment
            </NavLink>
            <NavLink href="#" active={pathname === "/deals"}>
              Deals
            </NavLink>
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search apps and games"
              className="w-64 rounded-full border border-input bg-background px-10 py-2 text-sm"
            />
          </div>
          <ThemeToggle />
          <LoginDialog />
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}