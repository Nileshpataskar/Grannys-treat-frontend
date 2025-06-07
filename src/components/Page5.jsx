import { useState, useEffect } from "react";
import { productCategories } from "../lib/carouselData";
import OptimizedImage from "./OptimizedImage";

const Page5 = () => {
  // Get all Lassi images
  const lassiImages = productCategories.find(cat => cat.category === "Lassi" )?.items.map(item => item.image) || [];
  const [currentLassiIdx, setCurrentLassiIdx] = useState(0);
  useEffect(() => {
    if (lassiImages.length < 2) return;
    const interval = setInterval(() => {
      setCurrentLassiIdx(idx => (idx + 1) % lassiImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [lassiImages.length]);

  return (
    <div className="h-auto min-h-screen w-full bg-[#55acee] relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      {/* Top Image */}
      <img
        src="/assets/BG/page5_top.png"
        alt="img"
        className="absolute top-0 w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover"
      />

      {/* Content Container */}
      <div className="w-full max-w-[120x] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-32 ">
        {/* Text Image */}
        <img
          src="/assets/Icons/benefitlabel.svg"
          alt="img"
          className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[400px] sm:max-w-[600px] md:max-w-[800px] transition-all duration-300"
        />

        {/* Design Image with looping Lassi image overlay */}
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] max-w-[500px] sm:max-w-[700px] md:max-w-[1000px] mx-auto">
          <img
            src="/assets/Icons/benefit.svg"
            alt="img"
            className="w-full h-auto transition-all duration-300"
          />
          {/* Looping Lassi image overlay */}
          {lassiImages.length > 0 && (
            <div className="absolute top-1/2 left-1/2 flex items-center justify-center pointer-events-none select-none"
                 style={{
                   transform: 'translate(-50%, -50%)',
                   width: 'min(60vw, 1100px)',
                   height: 'min(60vw, 1000px)',
                   zIndex: 10
                 }}>
              <OptimizedImage
                src={lassiImages[currentLassiIdx]}
                alt="Lassi Product"
                width={undefined}
                height={undefined}
                className="max-w-[220px] max-h-[260px] sm:max-w-[260px] sm:max-h-[320px] md:max-w-[320px] md:max-h-[380px] lg:max-w-[400px] lg:max-h-[400px] drop-shadow-2xl md:mt-32"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page5;
