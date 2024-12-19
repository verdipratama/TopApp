"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductSidebarProps {
  price: string;
}

export default function ProductSidebar({ price }: ProductSidebarProps) {
  return (
    <Card className="p-6 sticky top-24">
      <div className="space-y-6">
        <div>
          <div className="text-2xl font-bold">{price}</div>
          <div className="text-sm text-muted-foreground">Personal subscription</div>
        </div>
        <div className="space-y-3">
          <Button className="w-full text-lg py-6">Get Started</Button>
          <Button variant="outline" className="w-full">Free Trial</Button>
        </div>
        <div className="text-sm text-muted-foreground">
          By clicking "Get Started", you agree to the Microsoft Services Agreement and Privacy Statement
        </div>
      </div>
    </Card>
  );
}
