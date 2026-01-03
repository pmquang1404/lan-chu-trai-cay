import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/types/product';

const newArrivals: Product[] = [
  {
    id: 7,
    name: 'Cherry New Zealand',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b0bdd4?w=400',
    tag: 'Mới về',
    category: 'Trái Cây',
  },
  {
    id: 8,
    name: 'Kiwi Vàng',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400',
    tag: 'Hot',
    category: 'Trái Cây',
  },
  {
    id: 9,
    name: 'Lê Hàn Quốc',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1633332837443-62967499564c?w=400',
    tag: 'Mới về',
    category: 'Trái Cây',
  },
  {
    id: 10,
    name: 'Việt Quất Peru',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400',
    tag: 'Best Seller',
    category: 'Trái Cây',
  }
];

export default function NewArrivals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-center">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Sản Phẩm Mới Về</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <button className="hidden md:block text-primary font-bold hover:underline">
            Xem tất cả &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-primary font-bold hover:underline">
            Xem tất cả &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
