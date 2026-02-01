export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: any;
  category: string;
  reviews?: number;
  rating?: number;
  tag?: string;
  description?: string;

  // Status flags
  isNew?: boolean;
  isHot?: boolean;
  isBestSeller?: boolean;

  // SEO & Identity
  slug?: string;
  sku?: string;

  // Inventory & Status
  stock?: number;
  status?: 'in-stock' | 'out-of-stock' | 'pre-order';

  // Media
  gallery?: string[]; // Array of image URLs/imports

  // Organization
  tags?: string[]; // Replaces single 'tag' optionally
  attributes?: Record<string, string>; // e.g. { origin: 'USA', weight: '1kg' }
}
