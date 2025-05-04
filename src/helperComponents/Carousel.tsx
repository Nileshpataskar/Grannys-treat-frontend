"use client";

import React, { useState } from "react";

interface CarouselProps {
  children: React.ReactNode; // Accept valid React children
  className?: string; // Optional custom class for the wrapper
  thumbnails?: string[]; // Optional array of image sources for bottom navigation
}

const Carousel = ({ children, className, thumbnails }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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
