'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-32 container-center text-center">
        <h1 className="text-2xl text-gray-900 mb-4">Không tìm thấy sản phẩm</h1>
        <Link href="/products" className="text-primary hover:underline">
          ← Quay lại trang sản phẩm
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-center py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Trang chủ</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Sản phẩm</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container-center py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">
            {/* Product Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.tag && (
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                  {product.tag}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-1">
                <span className="text-sm text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 mt-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">({product.reviews || 0} đánh giá)</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="text-green-600 font-medium text-sm">Còn hàng</span>
              </div>

              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl font-bold text-primary">{formatCurrency(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through mb-1">{formatCurrency(product.originalPrice)}</span>
                )}
                {product.originalPrice && (
                  <span className="text-red-500 font-bold text-sm mb-2 bg-red-50 px-2 py-1 rounded-lg">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {product.description || 'Sản phẩm trái cây tươi ngon, được tuyển chọn kỹ lưỡng từ các nhà vườn uy tín. Cam kết chất lượng, an toàn vệ sinh thực phẩm và đổi trả miễn phí nếu không hài lòng.'}
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Nguồn gốc xuất xứ rõ ràng
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Không chất bảo quản độc hại
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Giao hàng nhanh trong 2h
                  </li>
                </ul>
              </div>

              {/* Contact & Actions */}
              <div className="mt-auto bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">📞</span> Liên hệ đặt hàng
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Vui lòng liên hệ trực tiếp để được tư vấn chi tiết về sản phẩm và kiểm tra tình trạng hàng hóa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:0902970444"
                    className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0902 970 444
                  </a>
                  
                  <div className="flex gap-4 flex-1">
                    <a 
                      href="https://zalo.me/0902970444" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Zalo
                    </a>
                    <a 
                      href="https://facebook.com/LanChu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#1877F2] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#166fe5] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
