'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';
import { giftBaskets, occasions } from '@/lib/gift-data';

function GiftBasketsContent() {
  const [selectedOccasion, setSelectedOccasion] = useState('Tất cả');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);

  const filteredBaskets = giftBaskets.filter((basket) => {
    if (selectedOccasion !== 'Tất cả' && basket.occasion !== selectedOccasion) {
      return false;
    }
    if (basket.price < priceRange[0] || basket.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="relative h-[300px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2070&auto=format&fit=crop"
            alt="Gift Baskets Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Giỏ Quà Trái Cây</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Trao gửi yêu thương qua những giỏ quà trái cây tươi ngon, sang trọng và ý nghĩa nhất.
          </p>
        </div>
      </div>

      <div className="container-center py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Occasion Filter */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-gray-900 border-b pb-2">Chọn Dịp Tặng</h3>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occasion) => (
                  <button
                    key={occasion}
                    onClick={() => setSelectedOccasion(occasion)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedOccasion === occasion
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {occasion}
                  </button>
                ))}
              </div>

              <h3 className="font-bold text-lg mt-8 mb-4 text-gray-900 border-b pb-2">Mức Giá</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>0đ</span>
                  <span>5.000.000đ+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="text-center font-bold text-primary">
                  0đ - {formatCurrency(priceRange[1])}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBaskets.map((basket) => (
                <div key={basket.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                    <Image
                      src={basket.image}
                      alt={basket.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {basket.occasion}
                    </div>
                    
                    {/* Quick Contact Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                      <a 
                        href={`https://zalo.me/0902970444?text=${encodeURIComponent(`Tôi quan tâm đến sản phẩm: ${basket.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center justify-center gap-2"
                      >
                        Chat Zalo
                      </a>
                      <a 
                        href="tel:0902970444"
                        className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 flex items-center justify-center gap-2"
                      >
                        Gọi Điện
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {basket.name}
                    </h3>
                    <p className="text-primary font-bold text-xl mb-3">{formatCurrency(basket.price)}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{basket.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Thành phần chính:</p>
                      <div className="flex flex-wrap gap-2">
                        {basket.items.map((item, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBaskets.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy giỏ quà phù hợp</h3>
                <p className="text-gray-500">Vui lòng thử lại với bộ lọc khác hoặc liên hệ trực tiếp để được thiết kế riêng.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GiftBasketsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <GiftBasketsContent />
    </Suspense>
  );
}
