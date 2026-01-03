'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        tag: '🔥 Sale Khủng Tháng 1',
        title: 'Trái Cây Tươi Ngon',
        highlight: 'Giảm Đến 50%',
        description: 'Chất lượng cao, nguồn gốc rõ ràng. Giao hàng tận nơi trong 2 giờ!',
        bgClass: 'from-green-500 via-emerald-600 to-teal-700',
        buttonClass: 'text-green-700 hover:text-green-800',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 2,
        tag: '🍊 Vitamin C Boost',
        title: 'Cam Quýt Tươi Mát',
        highlight: 'Mua 2 Tặng 1',
        description: 'Bổ sung vitamin C tự nhiên cho cả gia đình. Nhập khẩu trực tiếp từ Úc.',
        bgClass: 'from-orange-500 via-amber-600 to-yellow-600',
        buttonClass: 'text-orange-700 hover:text-orange-800',
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 3,
        tag: '🍓 Mùa Dâu Tây',
        title: 'Dâu Tây Đà Lạt',
        highlight: 'Ngọt Ngào Khó Cưỡng',
        description: 'Những trái dâu tây đỏ mọng, ngọt ngào vừa được hái tại vườn sáng nay.',
        bgClass: 'from-rose-500 via-pink-600 to-red-600',
        buttonClass: 'text-rose-700 hover:text-rose-800',
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=60'
    }
];

export default function MainBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="col-span-12 lg:col-span-6 h-full relative group min-h-[500px]">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <div className={`bg-gradient-to-br ${slide.bgClass} rounded-2xl p-8 lg:p-12 h-full shadow-2xl border border-white/10 relative overflow-hidden flex flex-col justify-center`}>
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                        
                        <div className="relative flex flex-col justify-center h-full z-20">
                            <span className={`inline-block px-6 py-3 bg-white/25 backdrop-blur-md text-white text-xs font-bold rounded-full mb-6 w-fit shadow-lg border border-white/20 ${index === currentSlide ? 'animate-slide-up' : ''}`}>
                                {slide.tag}
                            </span>
                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg ${index === currentSlide ? 'animate-slide-up delay-100' : ''}`}>
                                {slide.title}<br />
                                <span className="text-yellow-300 drop-shadow-md">{slide.highlight}</span>
                            </h1>
                            <p className={`text-white/95 text-base lg:text-lg mb-10 leading-relaxed max-w-md drop-shadow-md ${index === currentSlide ? 'animate-slide-up delay-200' : ''}`}>
                                {slide.description}
                            </p>
                            <div className={`flex flex-wrap gap-4 ${index === currentSlide ? 'animate-slide-up delay-300' : ''}`}>
                                <button className={`px-8 py-3.5 bg-white ${slide.buttonClass} rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95`}>
                                    Mua Ngay
                                </button>
                                <button className="px-8 py-3.5 bg-white/20 backdrop-blur-md text-white border-2 border-white/50 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95">
                                    Xem Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
