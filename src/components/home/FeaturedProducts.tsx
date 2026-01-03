import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/types/product';

const featuredProducts: Product[] = [
    {
        id: 1,
        name: 'Táo Fuji Nhật Bản',
        price: 120000,
        originalPrice: 150000,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
        reviews: 4100,
        category: 'Trái Cây',
    },
    {
        id: 2,
        name: 'Nho Mỹ Đỏ',
        price: 250000,
        originalPrice: 300000,
        image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400',
        reviews: 3200,
        category: 'Trái Cây',
    },
    {
        id: 3,
        name: 'Dưa Hấu Không Hạt',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=400',
        reviews: 2800,
        category: 'Trái Cây',
    },
    {
        id: 4,
        name: 'Sầu Riêng Ri6',
        price: 180000,
        image: 'https://images.unsplash.com/photo-1625995920830-350a0e44e166?w=400',
        reviews: 5100,
        category: 'Trái Cây',
    },
    {
        id: 5,
        name: 'Cam Cara Úc',
        price: 95000,
        originalPrice: 120000,
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400',
        reviews: 3600,
        category: 'Trái Cây',
    },
    {
        id: 6,
        name: 'Dâu Tây Đà Lạt',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
        reviews: 4200,
        category: 'Trái Cây',
    },
    {
        id: 7,
        name: 'Xoài Cát Hòa Lộc',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400',
        reviews: 3800,
        category: 'Trái Cây',
    },
    {
        id: 8,
        name: 'Bơ Booth Úc',
        price: 65000,
        originalPrice: 80000,
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400',
        reviews: 2900,
        category: 'Trái Cây',
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-white py-16 lg:py-20 mt-8 lg:mt-12">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Sản Phẩm Nổi Bật
                    </h2>
                    <button className="text-green-600 hover:text-green-700 font-bold text-sm lg:text-base flex items-center gap-2 px-5 py-2.5 rounded-lg hover:bg-green-50 transition-all duration-300">
                        Xem Tất Cả
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
