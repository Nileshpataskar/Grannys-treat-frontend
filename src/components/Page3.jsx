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
  const selectedScales = category.items.map((item) => item.selectedScale || 1.7);
  const thumbnailGap = category.thumbnailGap || 8;

  const prevCategory = () => {
    setCategoryIndex((i) => (i === 0 ? productCategories.length - 1 : i - 1));
    setCurrentImageIndex(0);
  };

  const nextCategory = () => {
    setCategoryIndex((i) => (i === productCategories.length - 1 ? 0 : i + 1));
    setCurrentImageIndex(0);
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col bg-gray-100 relative z-10">
      {/* Navigation Controls Overlay */}
      <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none z-20">
        <button
          onClick={prevCategory}
          className="pointer-events-auto cursor-pointer flex items-center gap-2 text-black/70 hover:text-black transition-colors group"
        >
          <div className="bg-white/75 backdrop-blur-sm hover:bg-white rounded-full p-2 transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </div>
        </button>
        <button
          onClick={nextCategory}
          className="pointer-events-auto cursor-pointer flex items-center gap-2 text-black/70 hover:text-black transition-colors group"
        >
          <div className="bg-white/75 backdrop-blur-sm hover:bg-white rounded-full p-2 transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </div>
        </button>
      </div>

      <Carousel
        className="w-full h-full"
        thumbnails={thumbnails}
        onSlideChange={handleImageChange}
        initialSlide={currentImageIndex}
        selectedScales={selectedScales}
        thumbnailGap={thumbnailGap}
        items={category.items}
      >
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-full flex flex-col items-center justify-start text-white text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500"
            style={{ backgroundColor: item.colorbg }}
          >
            {/* Div 1 - Product Title - 20vh */}
            <div className="w-full h-[40vh] flex items-center justify-center">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-[Fredoka] transition-all duration-500">
                {item.title}
              </h1>
            </div>

            {/* Main Content Area - 50vh */}
            <div className="w-full h-[60vh] flex items-center  ">
              {/* Div 2 - Left Space with Description */}
              <div className="w-3/8 h-full flex flex-col  items-start justify-center relative px-4 ">
                <div className="max-w-[500px] ml-32 mr-6">
                  <p className="text-2xl leading-relaxed text-white mb-6 font-[Fredoka] font-normal ">
                    {item.subtext1}
                  </p>
                  <div className="relative w-[200px] cursor-pointer hover:scale-105 transition-transform">
                    <img
                      src="/assets/page3/page3_locate.png"
                      alt="locate us"
                      className="w-full h-auto"
                    />

                  </div>
                </div>
              </div>

              {/* Div 3 - Main Product Image */}
              <div className="w-3/8 h-full flex items-center justify-center ">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  width={item.imgStyle?.width}
                  height={item.imgStyle?.height}
                  style={{
                    marginTop: item.imgStyle?.top || 0,
                    marginBottom: item.imgStyle?.marginBottom || 0,
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'inline-block',
                  }}
                  className="transition-all duration-500"
                />
              </div>

              {/* Div 4 - Right Space with Features */}
              <div className="w-3/8 h-full relative">
                {/* First star with text */}
                <div className="absolute w-[480px] h-[380px] -top-15 -left-30 z-10">
                  {/* Star background with text */}
                  <div className="relative w-full h-full">
                    {/* Star background */}
                    <div
                      className="w-full h-full"
                      style={{
                        background: `url('/assets/page3/page3_star.svg') no-repeat center center`,
                        backgroundSize: 'contain'
                      }}
                    />
                    {/* Text container */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[400px]">
                      <p className="text-2xl font-[Fredoka] text-black font-medium">
                        {item.subtext2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second star with text */}
                <div className="absolute w-[300px] h-[200px] top-70 right-30 z-20">
                  {/* Star background with text */}
                  <div className="relative w-full h-full">
                    {/* Star background */}
                    <div
                      className="w-full h-full"
                      style={{
                        background: `url('/assets/page3/page3_star2.svg') no-repeat center center`,
                        backgroundSize: 'contain'
                      }}
                    />
                    {/* Text container */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[250px]">
                      <p className="text-xl font-[Fredoka] text-black font-medium">
                        {item.subtext3}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Images */}
                {item.decorativeImages && Object.entries(item.decorativeImages).map(([key, image]) => (
                  <img
                    key={key}
                    src={image.path}
                    alt={`Decorative ${key}`}
                    className="absolute object-contain"
                    style={{
                      width: image.width,
                      height: image.height,
                      top: image.top,
                      left: image.left,
                      right: image.right,
                      bottom: image.bottom,
                      zIndex: image.zIndex,
                      transform: image.rotate ? `rotate(${image.rotate}deg)` : undefined
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Div 5 - Counter - 30vh */}
            <div className="w-full h-[30vh]  flex flex-col items-center justify-center gap-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-[Fredoka] font-normal text-black">
                {String(currentImageIndex + 1).padStart(2, '0')}/{String(category.items.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Page3;
