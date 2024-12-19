export interface App {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rating?: number;
  reviews?: string;
  downloads?: string;
  features?: string[];
  systemRequirements?: string[];
}