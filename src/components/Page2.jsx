const Page2 = () => {
  return (
    <div className="h-fit md:min-h-screen  w-full bg-[#d2eef9] relative overflow-hidden py-10 md:py-32">
      <div className="w-[95%] sm:w-[90%] md:w-[90%] h-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8">

        {/* Main text content */}
        <h1
          className="font-[Fredoka] text-[#285192] font-semibold text-center tracking-normal leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl  max-w-[95vw] sm:max-w-[80vw] md:max-w-[90vw]"
        >
          At Granny&apos;s Treat, we craft probiotic-rich dairy that's as nourishing as it is delicious — your daily go-to for health, taste, and a dash of love in every bite. Welcome to a community that celebrates good food and even better living.
        </h1>

        {/* Bottom heading */}
        <h4
          className="font-[Fredoka] text-[#285192] font-extrabold text-center 
          tracking-wide mt-16 sm:mt-20 md:mt-44
          text-3xl sm:text-5xl "
        >
          Explore our range of dairy delights
        </h4>

      </div>

      {/* Decorative Images */}
      <img
        src="/assets/BG/strawberry_page2.svg"
        alt="Decorative strawberry illustration"
        className="absolute w-[clamp(80px,22vw,285px)] h-auto aspect-square
        top-[8%] sm:top-[12%] md:top-[18%] lg:top-[22%] xl:top-[50px]
        left-[2%] sm:left-[6%] md:left-[10%] lg:left-[12%] xl:left-[186.63px]
         opacity-50 pointer-events-none select-none z-0"
      />

      <img
        src="/assets/BG/blueberry_page2.svg"
        alt="Decorative blueberry illustration"
        className="absolute w-[clamp(100px,28vw,375px)] h-auto aspect-square
        top-[55%] sm:top-[48%] md:top-[42%] lg:top-[36%] xl:top-[220px]
        right-[2%] sm:right-[6%] md:right-[10%] lg:right-[12%] xl:right-[186.63px]
        -rotate-[26deg] pointer-events-none select-none hidden sm:block z-0"
      />
    </div>
  );
};

export default Page2;
