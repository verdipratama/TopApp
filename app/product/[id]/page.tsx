import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { featuredApps } from "@/lib/data";
import ProductHeader from "@/components/product/ProductHeader";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSidebar from "@/components/product/ProductSidebar";
import type { App } from "@/types/app";

export async function generateStaticParams() {
  return featuredApps.map((app) => ({
    id: app.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = featuredApps.find((app) => app.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Store
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ProductHeader
            title={product.title}
            image={product.image}
            rating={product.rating || 4.5}
            reviews={product.reviews || "1M"}
            downloads={product.downloads || "100M+"}
          />
          <ProductDetails
            description={product.description}
            features={product.features || []}
            systemRequirements={product.systemRequirements || []}
          />
        </div>
        <div className="lg:col-span-1">
          <ProductSidebar price={product.price} />
        </div>
      </div>
    </div>
  );
}