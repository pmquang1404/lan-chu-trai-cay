'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'fruit', label: 'Trái Cây' },
    { id: 'fruit-basket', label: 'Giỏ Trái Cây' },
    { id: 'wedding', label: 'Cưới Hỏi' },
    { id: 'gift-basket', label: 'Giỏ Quà Tặng' },
];

export default function FeaturedProducts() {
    const [activeTab, setActiveTab] = useState('all');
    const [visibleCount, setVisibleCount] = useState(8);

    const filteredProducts = activeTab === 'all'
        ? products
        : products.filter(p => p.category === activeTab);

    const displayProducts = filteredProducts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container-center">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                        Sản Phẩm Tươi Mới
                    </h2>

                    {/* Categories Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveTab(cat.id);
                                    setVisibleCount(8); // Reset count on tab change
                                }}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat.id
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-200 scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Chưa có sản phẩm nào trong danh mục này.
                    </div>
                )}

                {/* Load More */}
                {displayProducts.length < filteredProducts.length && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-white border-2 border-green-600 text-green-700 rounded-full font-bold hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Xem Thêm Sản Phẩm
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
