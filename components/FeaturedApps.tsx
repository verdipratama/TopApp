"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const featuredApps = [
  {
    id: 1,
    title: "Microsoft 365",
    description: "Premium Office apps, extra cloud storage, advanced security",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=300",
    price: "$69.99/year"
  },
  {
    id: 2,
    title: "Adobe Creative Cloud",
    description: "Professional creative tools for photos, videos, and design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=300",
    price: "$52.99/month"
  },
  {
    id: 3,
    title: "Spotify",
    description: "Music and podcast streaming service",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=300",
    price: "Free"
  }
];

export default function FeaturedApps() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Featured Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredApps.map((app) => (
          <Card key={app.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <img src={app.image} alt={app.title} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>{app.title}</CardTitle>
              <CardDescription className="mt-2">{app.description}</CardDescription>
              <div className="mt-4 font-semibold">{app.price}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}