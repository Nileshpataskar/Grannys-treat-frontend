"use client";

import React, { useState, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode; // Accept valid React children
  className?: string; // Optional custom class for the wrapper
  thumbnails?: string[]; // Optional array of image sources for bottom navigation
  onSlideChange?: (index: number) => void;
  initialSlide?: number;
}

const Carousel = ({ children, className, thumbnails, onSlideChange, initialSlide = 0 }: CarouselProps) => {
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
      className={`relative w-full   mx-auto overflow-hidden ${className || ""}`}
    >
      {/* Carousel Content */}
      <div className="relative w-full h-full">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`absolute  inset-0 flex items-center justify-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-10">
        <button
          onClick={goToPrevious}
          className="bg-white/80 backdrop-blur-sm hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10"
        >
          &larr;
        </button>
        <button
          onClick={goToNext}
          className="bg-white/80 backdrop-blur-sm hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10"
        >
          &rarr;
        </button>
      </div>

      {/* Thumbnail Navigation */}
      {thumbnails && (
        <div className="absolute -bottom-10 sm:-bottom-36 left-0 right-0 flex justify-center  space-x-1 z-10">
          <div className="flex space-x-2  px-6 sm:px-0">
            {thumbnails.map((src, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${
                  index === currentIndex
                    ? "border-transparent scale-[1.7]"
                    : "border-transparent opacity-70"
                } transition-transform`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={205}
                  height={105}
                  //   objectFit="cover"
                  className="rounded  "
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
