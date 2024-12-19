import type { App } from "@/types/app";

export const featuredApps: App[] = [
  {
    id: "microsoft-365",
    title: "Microsoft 365",
    description: "Premium Office apps, extra cloud storage, advanced security",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=300",
    price: "$69.99/year",
    rating: 4.8,
    reviews: "2.5M",
    downloads: "1B+",
    features: [
      "Premium Office apps with advanced features",
      "1TB OneDrive cloud storage per person",
      "Advanced security features and password protection",
      "Ad-free email with Outlook",
      "Real-time collaboration tools",
      "Microsoft Teams for personal use"
    ],
    systemRequirements: [
      "Windows 10 or later",
      "4GB RAM",
      "DirectX 9 or later with WDDM 2.0",
      "4GB available disk space",
      "1280 x 768 screen resolution"
    ]
  },
  {
    id: "adobe-creative-cloud",
    title: "Adobe Creative Cloud",
    description: "Professional creative tools for photos, videos, and design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=300",
    price: "$52.99/month"
  },
  {
    id: "spotify",
    title: "Spotify",
    description: "Music and podcast streaming service",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=300",
    price: "Free"
  }
];