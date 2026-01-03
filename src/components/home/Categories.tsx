import React from 'react';
import Link from 'next/link';

export default function Categories() {
    return (
        <section className="bg-white py-16 lg:py-20 mt-8 lg:mt-12">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-gray-900">
                    Danh Mục Sản Phẩm
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
                    <Link href="/products?category=Trái%20cây%20nội%20địa" className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 lg:p-8 rounded-2xl text-center group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:scale-105 transform">
                        <div className="text-5xl lg:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🍎</div>
                        <span className="text-sm lg:text-base font-bold text-gray-900">Trái Cây Việt</span>
                    </Link>

                    <Link href="/products?category=Trái%20cây%20nhập%20khẩu" className="bg-gradient-to-br from-lime-50 to-green-50 p-6 lg:p-8 rounded-2xl text-center group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-lime-100 hover:border-lime-300 hover:scale-105 transform">
                        <div className="text-5xl lg:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🌿</div>
                        <span className="text-sm lg:text-base font-bold text-gray-900">Nhập Khẩu</span>
                    </Link>

                    <Link href="/products?category=Quà%20tặng%20trái%20cây" className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 lg:p-8 rounded-2xl text-center group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-300 hover:scale-105 transform">
                        <div className="text-5xl lg:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⭐</div>
                        <span className="text-sm lg:text-base font-bold text-gray-900">Quà Tặng</span>
                    </Link>

                    <Link href="/products?category=Trái%20cây%20sấy%20khô" className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 lg:p-8 rounded-2xl text-center group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105 transform">
                        <div className="text-5xl lg:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🌊</div>
                        <span className="text-sm lg:text-base font-bold text-gray-900">Sấy Khô</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
