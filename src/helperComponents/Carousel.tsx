"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  thumbnails?: string[];
  onSlideChange?: (index: number) => void;
  initialSlide?: number;
  selectedScales?: number[];
  thumbnailGap?: number;
  items?: any[];
}

const Carousel = ({
  children,
  className,
  thumbnails,
  onSlideChange,
  initialSlide = 0,
  selectedScales,
  thumbnailGap,
  items = [],
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const totalSlides = React.Children.count(children);

  // Update currentIndex when initialSlide changes
  useEffect(() => {
    setCurrentIndex(initialSlide);
  }, [initialSlide]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    onSlideChange?.(index);
  };

  return (
    <div
      className={`relative w-full mx-auto overflow-hidden ${className || ""}`}
    >
      {/* Carousel Content */}
      <div className="relative w-full h-full">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Carousel left/right navigation */}
      {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-10">
        <button
          onClick={goToPrevious}
          className="bg-white/70 hover:bg-white text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-20"
        >
          <ChevronLeft className="w-8 h-8" /> 
        </button>
        <button
          onClick={goToNext}
          className="bg-white/70 hover:bg-white text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div> */}

      {/* Thumbnail Navigation */}
      {thumbnails && (
        <div className="absolute left-0 right-0 flex justify-center space-x-1 z-10">
          <div
            className="flex items-end px-6 sm:px-0"
            style={{ gap: `${thumbnailGap ?? 8}px`, height: "110px" }}
          >
            {thumbnails.map((src, index) => {
              const scale = selectedScales?.[index] ?? 1.7;
              const position = items[index]?.thumbnailNavPosition || { bottom: 0 };
              const thumbStyle = items[index]?.thumbnailStyle || { width: 205, height: 105 };
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="border-transparent transition-transform"
                  style={{
                    transform: index === currentIndex ? `scale(${scale})` : undefined,
                    position: 'relative',
                    ...position
                  }}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={thumbStyle.width}
                    height={thumbStyle.height}
                    className="rounded h-full object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
