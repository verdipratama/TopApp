"use client";

import { Card } from "@/components/ui/card";

interface ProductDetailsProps {
  description: string;
  features: string[];
  systemRequirements: string[];
}

export default function ProductDetails({ description, features, systemRequirements }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-muted-foreground">{description}</p>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">System Requirements</h2>
        <div className="space-y-3 text-muted-foreground">
          {systemRequirements.map((req, index) => (
            <p key={index}>• {req}</p>
          ))}
        </div>
      </Card>
    </div>
  );
}