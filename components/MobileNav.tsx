"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-left mb-4">Navigation</SheetTitle>
        <nav className="flex flex-col space-y-4">
          <MobileNavLink href="/" active={pathname === "/"}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" active={pathname === "/about"}>
            About
          </MobileNavLink>
          <MobileNavLink href="#" active={pathname === "/gaming"}>
            Gaming
          </MobileNavLink>
          <MobileNavLink href="#" active={pathname === "/entertainment"}>
            Entertainment
          </MobileNavLink>
          <MobileNavLink href="#" active={pathname === "/deals"}>
            Deals
          </MobileNavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-lg font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-secondary",
        active ? "text-primary bg-secondary" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}