export function HeroSkeleton() {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted animate-pulse">
      <div className="relative h-full flex items-center">
        <div className="container px-8 space-y-6">
          <div className="h-12 w-2/3 bg-muted-foreground/10 rounded animate-pulse" />
          <div className="h-6 w-1/2 bg-muted-foreground/10 rounded animate-pulse" />
          <div className="h-10 w-32 bg-muted-foreground/10 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}