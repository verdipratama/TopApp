import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import { AppCardSkeleton } from "@/components/skeletons/AppCardSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-12">
        <HeroSkeleton />
        
        <section className="space-y-6">
          <div className="h-8 w-48 bg-muted animate-pulse rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <AppCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}