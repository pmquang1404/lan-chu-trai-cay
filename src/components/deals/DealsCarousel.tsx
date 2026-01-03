'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DealItem {
  id: number;
  image: string;
  title: string;
  discount: string;
}

interface DealsCarouselProps {
  items: DealItem[];
}

export default function DealsCarousel({ items }: DealsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66.67vw"
        />
        
        {/* Overlay Info */}
        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg shadow-md border border-gray-100">
          <p className="text-xs text-gray-600 mb-0.5">{String(currentIndex + 1).padStart(2, '0')} — {items[currentIndex].title}</p>
          <p className="text-sm md:text-base font-bold text-gray-900">{items[currentIndex].discount}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all z-10"
        aria-label="Previous"
      >
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all z-10"
        aria-label="Next"
      >
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-3 md:mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 h-1.5 md:w-8 md:h-2 bg-gray-900'
                : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

