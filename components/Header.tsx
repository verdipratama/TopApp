"use client";

import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-6">
          <span className="hidden md:block text-xl font-semibold">Microsoft Store</span>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Gaming</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Entertainment</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Productivity</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Deals</a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search apps and games"
              className="w-64 rounded-full border border-input bg-background px-10 py-2 text-sm"
            />
          </div>
          <ThemeToggle />
          <Button>Sign in</Button>
        </div>
      </div>
    </header>
  );
}