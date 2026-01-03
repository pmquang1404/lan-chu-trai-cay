'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import DealsCarousel from '@/components/deals/DealsCarousel';

const featuredProducts = [
  {
    id: 1,
    name: 'Táo Fuji Nhật Bản',
    price: 120000,
    originalPrice: 150000,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
    brand: 'Al Karam',
    reviews: 4100,
    status: 'Almost Sold Out',
  },
  {
    id: 2,
    name: 'Nho Mỹ Đỏ',
    price: 250000,
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400',
    brand: 'Al Karam',
    reviews: 3200,
    status: 'Almost Sold Out',
  },
  {
    id: 3,
    name: 'Dưa Hấu Không Hạt',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=400',
    brand: 'Al Karam',
    reviews: 2800,
    status: 'Almost Sold Out',
  },
  {
    id: 4,
    name: 'Sầu Riêng Ri6',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1625995920830-350a0e44e166?w=400',
    brand: 'Al Karam',
    reviews: 5100,
    status: 'Almost Sold Out',
  },
  {
    id: 5,
    name: 'Cam Cara Úc',
    price: 95000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400',
    brand: 'Al Karam',
    reviews: 3600,
    status: 'Almost Sold Out',
  },
  {
    id: 6,
    name: 'Dâu Tây Đà Lạt',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    brand: 'Al Karam',
    reviews: 4200,
    status: 'Almost Sold Out',
  },
];

const dealItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600',
    title: 'Giảm giá mùa xuân',
    discount: '30% OFF',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600',
    title: 'Deal đặc biệt',
    discount: '40% OFF',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1603833797131-3c0a18fcb6b1?w=600',
    title: 'Khuyến mãi hè',
    discount: '25% OFF',
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 6, mins: 5, secs: 30 });
  const [activeTab, setActiveTab] = useState("women");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-block">
                <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                  🔥 Sale Khủng - Tiết Kiệm Đến 50%
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  ULTIMATE
                </span>
              </h1>
              
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold" style={{ 
                WebkitTextStroke: '3px #111',
                color: 'transparent',
                filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.15))'
              }}>
                SALE
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                Bộ Sưu Tập Trái Cây Tươi Ngon
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                <button className="px-10 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Mua Ngay →
                </button>
                <button className="px-10 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 shadow-md">
                  Xem Thêm
                </button>
              </div>
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Image
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500"
                  alt="Trái cây tươi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="space-y-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <Image
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400"
                    alt="Trái cây organic"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <Image
                    src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400"
                    alt="Trái cây nhập khẩu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Brand Categories Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Danh Mục Sản Phẩm</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-xl text-center group cursor-pointer hover:shadow-lg transition-all border border-gray-200">
              <div className="text-4xl mb-3">🍎</div>
              <span className="text-sm font-semibold text-gray-900">Trái Cây Việt</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center group cursor-pointer hover:shadow-lg transition-all border border-gray-200">
              <div className="text-4xl mb-3">🌿</div>
              <span className="text-sm font-semibold text-gray-900">Organic</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center group cursor-pointer hover:shadow-lg transition-all border border-gray-200">
              <div className="text-4xl mb-3">⭐</div>
              <span className="text-sm font-semibold text-gray-900">Premium</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center group cursor-pointer hover:shadow-lg transition-all border border-gray-200">
              <div className="text-4xl mb-3">🌊</div>
              <span className="text-sm font-semibold text-gray-900">Fresh Daily</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center group cursor-pointer hover:shadow-lg transition-all border border-gray-200">
              <div className="text-4xl mb-3">✈️</div>
              <span className="text-sm font-semibold text-gray-900">Nhập Khẩu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Deals of the Month */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Deal Info - 4 columns */}
            <div className="lg:col-span-5 flex flex-col justify-center bg-red-50 rounded-xl p-8 border border-red-100">
              <div className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg mb-4 w-fit">
                🔥 HOT DEAL
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Ưu Đãi Tháng Này
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Săn ngay những deal siêu hời! Giảm giá lên đến <span className="font-bold text-red-600">50%</span> cho các loại trái cây tươi ngon.
              </p>
              <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all mb-6 w-fit">
                Mua ngay
              </button>

              <div>
                <p className="text-sm text-gray-700 mb-3 font-medium">Nhanh tay, ưu đãi sắp kết thúc!</p>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center bg-white rounded-lg p-3 border border-red-200">
                    <div className="text-2xl font-bold text-gray-900">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-600 mt-1">Ngày</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-3 border border-red-200">
                    <div className="text-2xl font-bold text-gray-900">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-600 mt-1">Giờ</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-3 border border-red-200">
                    <div className="text-2xl font-bold text-gray-900">{String(timeLeft.mins).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-600 mt-1">Phút</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-3 border border-red-200">
                    <div className="text-2xl font-bold text-gray-900">{String(timeLeft.secs).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-600 mt-1">Giây</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deal Products Carousel - 8 columns */}
            <div className="lg:col-span-7">
              <DealsCarousel items={dealItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Sản Phẩm Mới Nhất
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cập nhật liên tục những loại trái cây tươi ngon nhất
            </p>
          </div>

          {/* Products Grid - 4 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-600 ml-1">({formatNumber(product.reviews)})</span>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-green-600">{formatCurrency(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">{formatCurrency(product.originalPrice)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
