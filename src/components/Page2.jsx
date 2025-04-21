const Page2 = () => {
  return (
    <div className="min-h-screen w-full bg-[#d2eef9] relative overflow-hidden py-32">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] h-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8">

        {/* Main text content */}
        <h1
          className="font-[Fredoka] text-[#285192] font-semibold text-center 
          tracking-wide leading-relaxed
          text-[clamp(1rem,2vw,2.25rem)] "
        >
          At Granny&apos;s Treat, we craft probiotic-rich dairy that’s as nourishing as it is delicious — your daily go-to for health, taste, and a dash of love in every bite. Welcome to a community that celebrates good food and even better living.
        </h1>

        {/* Bottom heading */}
        <h4
          className="font-[Fredoka] text-[#285192] font-extrabold text-center 
          tracking-wide mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32
          text-3xl sm:text-5xl "
        >
          Explore our range of dairy delights
        </h4>
      </div>

      {/* Decorative Images */}
      <img
        src="/assets/BG/strawberry_page2.svg"
        alt="Decorative strawberry illustration"
        className="absolute w-[clamp(100px,20vw,285px)] h-auto aspect-square
        top-[10%] sm:top-[15%] md:top-[20%] lg:top-[25%] xl:top-[135px]
        left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%] xl:left-[186.63px]
        -rotate-[26deg] opacity-50 pointer-events-none select-none"
      />

      <img
        src="/assets/BG/blueberry_page2.svg"
        alt="Decorative blueberry illustration"
        className="absolute w-[clamp(140px,24vw,375px)] h-auto aspect-square
        top-[50%] sm:top-[45%] md:top-[40%] lg:top-[35%] xl:top-[320px]
        right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%] xl:right-[186.63px]
        -rotate-[26deg] pointer-events-none select-none hidden sm:block"
      />
    </div>
  );
};

export default Page2;
