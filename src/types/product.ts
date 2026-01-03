export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  reviews?: number;
  rating?: number;
  tag?: string;
  description?: string;
}
