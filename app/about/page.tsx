"use client";

import { Building2, Users, Globe2, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Microsoft Store</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted destination for apps, games, and digital content for Windows.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To empower every person and organization on the planet to achieve more through
            our curated collection of digital tools and entertainment.
          </p>
        </section>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Trusted Platform",
    description: "All apps are thoroughly vetted for security and performance to ensure a safe experience.",
    icon: Shield
  },
  {
    title: "Global Reach",
    description: "Available in over 200 countries and territories, serving millions of users daily.",
    icon: Globe2
  },
  {
    title: "Developer Support",
    description: "Comprehensive tools and resources for developers to build and distribute their apps.",
    icon: Building2
  },
  {
    title: "Community",
    description: "A vibrant community of users and developers sharing feedback and experiences.",
    icon: Users
  }
];