// Page3.jsx
"use client";

import { useState } from "react";
import Carousel from "../helperComponents/Carousel";
import { productCategories } from "../lib/carouselData";

const Page3 = () => {
  // ← track which category is showing:
  const [categoryIndex, setCategoryIndex] = useState(0); // ← NEW
  const category = productCategories[categoryIndex]; // ← UPDATED

  // ← thumbnails now come from `category.items`:
  const thumbnails = category.items.map((item) => item.image); // ← UPDATED

  // ← handlers for category arrows:
  const prevCategory = () =>
    setCategoryIndex((i) => (i === 0 ? productCategories.length - 1 : i - 1)); // ← NEW
  const nextCategory = () =>
    setCategoryIndex((i) => (i === productCategories.length - 1 ? 0 : i + 1)); // ← NEW

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 relative z-10">
      {/* ← move arrows here so they control categories */}
      <button
        onClick={prevCategory}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10 z-20 rounded-full"
      >
        &larr;
      </button>
      <button
        onClick={nextCategory}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10 z-20 rounded-full"
      >
        &rarr;
      </button>

      <Carousel className="w-full h-full" thumbnails={thumbnails}>
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-full flex flex-col items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold px-5"
            style={{ backgroundColor: category.items[idx].colorbg }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-6xl mb-4 font-[Fredoka]">
              {item.title}
            </h1>

            {/* Image & variant title */}
            <div className="text-center">
              <img
                src={item.image}
                alt={item.title}
                width={500}
                height={400}
                className=""
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl mb-4 font-[Fredoka] font-normal text-black">
              (01/02)
            </h1>
            {/* category title */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Page3;
