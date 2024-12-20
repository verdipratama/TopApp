// Modified from https://github.com/shadcn-ui/ui/blob/main/apps/www/components/progress-bar.tsx
"use client";

import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reset progress when route changes
    const progress = document.getElementById("progress-bar") as HTMLDivElement;
    if (progress) {
      progress.style.width = "0%";
      setTimeout(() => {
        progress.style.width = "100%";
      }, 10);
    }
  }, [pathname, searchParams]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        id="progress-bar"
        className={cn(
          "h-full bg-primary transition-all duration-500 ease-in-out",
          "w-0"
        )}
      />
    </div>
  );
}