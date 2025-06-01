// Page3.jsx
"use client";

import { useState } from "react";
import Carousel from "../helperComponents/Carousel";
import { productCategories } from "../lib/carouselData";
import OptimizedImage from "./OptimizedImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Preload all images when the module is imported
const preloadedImages = new Set();
productCategories.forEach(cat => {
  cat.items.forEach(item => {
    const img = new Image();
    img.src = item.image;
    preloadedImages.add(item.image);
  });
});

const Page3 = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const category = productCategories[categoryIndex];
  const thumbnails = category.items.map((item) => item.image);
  const currentItem = category.items[currentImageIndex];
  const thumbnailNavPosition = currentItem.thumbnailNavPosition || category.thumbnailNavPosition || { bottom: 40 };
  const selectedScales = category.items.map((item) => item.selectedScale || 1.7);
  const thumbnailGap = category.thumbnailGap || 8;

  const prevCategory = () => {
    setCategoryIndex((i) => (i === 0 ? productCategories.length - 1 : i - 1));
    setCurrentImageIndex(0); // Reset to first image when changing category
  };

  const nextCategory = () => {
    setCategoryIndex((i) => (i === productCategories.length - 1 ? 0 : i + 1));
    setCurrentImageIndex(0); // Reset to first image when changing category
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 relative z-10">
      <button
        onClick={prevCategory}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/75 backdrop-blur-sm hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10 z-20 rounded-full transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextCategory}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/75 backdrop-blur-sm hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10 z-20 rounded-full transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <Carousel 
        className="w-full h-full" 
        thumbnails={thumbnails}
        thumbnailNavPosition={thumbnailNavPosition}
        onSlideChange={handleImageChange}
        initialSlide={currentImageIndex}
        selectedScales={selectedScales}
        thumbnailGap={thumbnailGap}
      >
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-full flex flex-col items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold px-5 transition-all duration-500"
            style={{ backgroundColor: category.items[idx].colorbg }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-6xl mb-4 font-[Fredoka] transition-all duration-500">
              {item.title}
            </h1>
            <div
              className="text-center relative flex items-center justify-center"
              style={{ minHeight: 220, marginBottom: 80 }}
            >
              <OptimizedImage
                src={item.image}
                alt={item.title}
                width={item.imgStyle?.width}
                height={item.imgStyle?.height}
                style={{
                  marginTop: item.imgStyle?.top || 0,
                  marginBottom: item.imgStyle?.marginBottom || 0,
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  display: 'inline-block',
                }}
                className="transition-all duration-500"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl mb-4 font-[Fredoka] font-normal text-black transition-all duration-500">
              ({String(currentImageIndex + 1).padStart(2, '0')}/{String(category.items.length).padStart(2, '0')})
            </h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Page3;
