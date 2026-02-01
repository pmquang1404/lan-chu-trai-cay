import React from 'react';
import Link from 'next/link';

export default function Categories() {
    return (
        <section className="bg-white py-8 lg:py-12 border-b border-gray-100">
            <div className="container-center">
                {/* 
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10 text-gray-900">
                    Danh Mục Nổi Bật
                </h2> 
                */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {/* Trái Cây */}
                    <Link href="/products?category=fruit" className="group">
                        <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl bg-green-50/50 hover:bg-green-100 transition-all duration-300 h-full border border-transparent hover:border-green-200">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mb-3 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl lg:text-4xl">🍎</span>
                            </div>
                            <h3 className="text-base lg:text-lg font-bold text-gray-800 text-center group-hover:text-green-700">
                                Trái Cây
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 text-center hidden lg:block">Tươi ngon mỗi ngày</p>
                        </div>
                    </Link>

                    {/* Giỏ Trái Cây */}
                    <Link href="/products?category=fruit-basket" className="group">
                        <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl bg-orange-50/50 hover:bg-orange-100 transition-all duration-300 h-full border border-transparent hover:border-orange-200">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mb-3 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl lg:text-4xl">🧺</span>
                            </div>
                            <h3 className="text-base lg:text-lg font-bold text-gray-800 text-center group-hover:text-orange-700">
                                Giỏ Trái Cây
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 text-center hidden lg:block">100% Trái cây tươi</p>
                        </div>
                    </Link>

                    {/* Cưới Hỏi */}
                    <Link href="/products?category=wedding" className="group">
                        <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl bg-red-50/50 hover:bg-red-100 transition-all duration-300 h-full border border-transparent hover:border-red-200">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mb-3 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl lg:text-4xl">💒</span>
                            </div>
                            <h3 className="text-base lg:text-lg font-bold text-gray-800 text-center group-hover:text-red-700">
                                Cưới Hỏi
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 text-center hidden lg:block">Mâm quả sang trọng</p>
                        </div>
                    </Link>

                    {/* Giỏ Quà Tặng (Khai Trương/Lễ) */}
                    <Link href="/products?category=gift-basket" className="group">
                        <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl bg-amber-50/50 hover:bg-amber-100 transition-all duration-300 h-full border border-transparent hover:border-amber-200">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mb-3 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl lg:text-4xl">🎁</span>
                            </div>
                            <h3 className="text-base lg:text-lg font-bold text-gray-800 text-center group-hover:text-amber-700">
                                Giỏ Quà Tặng
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 text-center hidden lg:block">Kèm bánh kẹo, hoa</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
