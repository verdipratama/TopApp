"use client";

import { Suspense } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { featuredApps } from "@/lib/data";
import { AppCardSkeleton } from "./skeletons/AppCardSkeleton";

export default function FeaturedApps() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Featured Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredApps.map((app) => (
          <Suspense key={app.id} fallback={<AppCardSkeleton />}>
            <Link href={`/product/${app.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img src={app.image} alt={app.title} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>{app.title}</CardTitle>
                  <CardDescription className="mt-2">{app.description}</CardDescription>
                  <div className="mt-4 font-semibold">{app.price}</div>
                </CardContent>
              </Card>
            </Link>
          </Suspense>
        ))}
      </div>
    </section>
  );
}