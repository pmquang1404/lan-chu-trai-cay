'use client';

import React, { useState, useEffect } from 'react';

export default function DealTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 6, mins: 5, secs: 30 });

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

    return (
        <section className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 py-12 lg:py-16 mt-8 lg:mt-12 shadow-lg">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 drop-shadow-lg">🔥 Flash Sale - Kết Thúc Sau:</h3>
                        <p className="text-base lg:text-lg text-white/90 drop-shadow-md">Nhanh tay săn deal trước khi hết!</p>
                    </div>
                    <div className="flex gap-4 lg:gap-5">
                        <div className="bg-white rounded-xl px-5 py-3 text-center min-w-[70px] shadow-xl hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1">{String(timeLeft.days).padStart(2, '0')}</div>
                            <div className="text-xs font-semibold text-gray-600 uppercase">Ngày</div>
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 text-center min-w-[70px] shadow-xl hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
                            <div className="text-xs font-semibold text-gray-600 uppercase">Giờ</div>
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 text-center min-w-[70px] shadow-xl hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1">{String(timeLeft.mins).padStart(2, '0')}</div>
                            <div className="text-xs font-semibold text-gray-600 uppercase">Phút</div>
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 text-center min-w-[70px] shadow-xl hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1">{String(timeLeft.secs).padStart(2, '0')}</div>
                            <div className="text-xs font-semibold text-gray-600 uppercase">Giây</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
