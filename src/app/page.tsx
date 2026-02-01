'use client';

import MainBanner from '@/components/home/MainBanner';
import LeftBanner from '@/components/home/LeftBanner';
import RightBanner from '@/components/home/RightBanner';
import Categories from '@/components/home/Categories';
import DealTimer from '@/components/home/DealTimer';
import FeaturedProducts from '@/components/home/FeaturedProducts';

import Testimonials from '@/components/home/Testimonials';
import GoogleMap from '@/components/home/GoogleMap';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Categories Section - Moved Top */}
      <Categories />

      {/* Hero Section with Grid Layout */}
      <section className="pt-6 pb-8 lg:pt-8 lg:pb-12 bg-gray-50">
        <div className="container-center">
          <div className="grid grid-cols-12 gap-6 h-auto lg:h-[500px]">
            <LeftBanner />
            <MainBanner />
            <RightBanner />
          </div>
        </div>
      </section>



      {/* Flash Deal Timer */}
      <DealTimer />

      {/* Featured Products */}
      <FeaturedProducts />



      {/* Why Choose Us - Features */}
      <section className="py-16 bg-white">
        <div className="container-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-green-100 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🌿</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Organic 100%</h3>
              <p className="text-gray-600">Sản phẩm được trồng theo quy trình hữu cơ nghiêm ngặt, không hóa chất độc hại.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-blue-100 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Giao Hàng Nhanh</h3>
              <p className="text-gray-600">Giao hàng hỏa tốc trong nội thành chỉ trong 2 giờ. Miễn phí vận chuyển đơn từ 500k.</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-orange-100 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Đổi Trả Miễn Phí</h3>
              <p className="text-gray-600">Cam kết hoàn tiền 100% hoặc đổi trả 1-1 nếu sản phẩm không đạt chất lượng như cam kết.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Google Map */}
      <GoogleMap />
    </div>
  );
}
