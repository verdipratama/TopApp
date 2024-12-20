import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AppCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="w-full h-48 bg-muted animate-pulse" />
      </CardHeader>
      <CardContent className="p-6 space-y-3">
        <div className="h-6 w-2/3 bg-muted animate-pulse rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted animate-pulse rounded" />
          <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
        </div>
        <div className="h-5 w-1/4 bg-muted animate-pulse rounded" />
      </CardContent>
    </Card>
  );
}