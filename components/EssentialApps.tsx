"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Star } from "lucide-react";

const essentialApps = [
  {
    id: 1,
    title: "Microsoft Teams",
    category: "Business",
    rating: 4.5,
    icon: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 2,
    title: "Visual Studio Code",
    category: "Developer Tools",
    rating: 4.8,
    icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 3,
    title: "Windows Terminal",
    category: "Developer Tools",
    rating: 4.7,
    icon: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 4,
    title: "PowerToys",
    category: "Utilities",
    rating: 4.6,
    icon: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=100",
  },
];

export default function EssentialApps() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Essential Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {essentialApps.map((app) => (
          <Card key={app.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <img src={app.icon} alt={app.title} className="w-16 h-16 rounded-xl" />
                <div>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                  <CardDescription className="mt-1">{app.category}</CardDescription>
                  <div className="mt-2 flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{app.rating}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}