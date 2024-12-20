"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Download } from "lucide-react";

const topApps = [
  {
    id: 1,
    title: "WhatsApp",
    description: "Simple. Reliable. Private.",
    downloads: "1B+",
    icon: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 2,
    title: "Netflix",
    description: "Watch TV shows and movies",
    downloads: "500M+",
    icon: "https://images.unsplash.com/photo-1636177561426-6ca44c41ac3b?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 3,
    title: "Disney+",
    description: "Stream exclusive originals",
    downloads: "100M+",
    icon: "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 4,
    title: "Zoom",
    description: "Video conferencing",
    downloads: "500M+",
    icon: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=100",
  },
];

export default function TopApps() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Top Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topApps.map((app) => (
          <Card key={app.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardContent className="flex items-center space-x-4 p-6">
              <img src={app.icon} alt={app.title} className="w-16 h-16 rounded-xl" />
              <div className="flex-1">
                <CardTitle className="text-lg">{app.title}</CardTitle>
                <CardDescription className="mt-1">{app.description}</CardDescription>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <Download className="w-4 h-4 mr-1" />
                  {app.downloads}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}