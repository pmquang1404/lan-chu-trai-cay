import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const newArrivals = products.slice(0, 4);

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
