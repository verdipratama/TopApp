"use client";

import { Download, Star } from "lucide-react";

interface ProductHeaderProps {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  downloads: string;
}

export default function ProductHeader({ title, image, rating, reviews, downloads }: ProductHeaderProps) {
  return (
    <div className="flex items-start space-x-6">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 rounded-xl"
      />
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{rating} ({reviews} reviews)</span>
        </div>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <Download className="w-4 h-4 mr-1" />
          {downloads} downloads
        </div>
      </div>
    </div>
  );
}