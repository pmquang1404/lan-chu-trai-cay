import React from 'react';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';

export default function RightBanner() {
    return (
        <div className="col-span-12 lg:col-span-3 h-full">
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl p-6 lg:p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-400/20 flex flex-col">
                <h3 className="text-white font-bold text-lg lg:text-xl mb-6 flex items-center gap-2">
                    <span className="text-2xl">⏰</span>
                    <span>Deal Hôm Nay</span>
                </h3>
                <div className="bg-white rounded-xl p-5 mb-5 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-md flex-shrink-0">
                        <Image
                            src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300"
                            alt="Deal"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg animate-bounce">
                            -40%
                        </div>
                    </div>
                    <p className="font-bold text-gray-900 text-sm mb-2 mt-auto">Táo Fuji Nhật</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-red-600">{formatCurrency(120000)}</span>
                        <span className="text-xs text-gray-400 line-through">{formatCurrency(200000)}</span>
                    </div>
                </div>
                <button className="w-full py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95">
                    Xem Tất Cả Deal
                </button>
            </div>
        </div>
    );
}
