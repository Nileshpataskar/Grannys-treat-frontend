const Page2 = () => {
  return (
    <div className="h-screen w-full bg-[#d2eef9] relative overflow-hidden">
      {/* Main content container with responsive width */}
      <div
        className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 
          h-full flex flex-col items-center justify-center mx-auto
          px-4 sm:px-6 md:px-8"
      >
        {/* Main text content */}
        <h1
          className="font-[Fredoka] text-[#285192] font-[600] text-center 
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
            tracking-wider max-w-[95%] sm:max-w-[90%] md:max-w-[85%]"
        >
          At Granny&apos;s Treat, we prioritize health and quality above all by
          crafting nutrient-rich dairy products that nourish both body and soul.
          Your daily dairy go-to, bringing you probiotic-rich, nutrient-packed
          products that taste amazing and are great for your health. Welcome to
          our little community, bringing you treats with a dash of love in every
          bite.
        </h1>

        {/* Bottom heading with responsive margin and font size */}
        <h4
          className="font-[Fredoka] text-[#285192] font-[800] text-center 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            tracking-wider
            mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40
            max-w-[95%] sm:max-w-[90%] md:max-w-[85%]"
        >
          Explore our range of dairy delights
        </h4>
      </div>

      {/* Decorative images with responsive positioning and sizing */}
      <img
        src="/assets/BG/strawberry_page2.svg"
        alt="straw"
        className="absolute w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[285px]
            h-auto aspect-square
            top-[10%] sm:top-[15%] md:top-[20%] lg:top-[25%] xl:top-[135px]
            left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%] xl:left-[186.63px]
            -rotate-[26deg] opacity-50
            pointer-events-none select-none"
      />

      <img
        src="/assets/BG/blueberry_page2.svg"
        alt="straw"
        className="absolute w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] xl:w-[375px]
            h-auto aspect-square
            top-[50%] sm:top-[45%] md:top-[40%] lg:top-[35%] xl:top-[320px]
            right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%] xl:right-[186.63px]
            -rotate-[26deg]
            pointer-events-none select-none
            hidden sm:block" // Hide on mobile to prevent clutter
      />
    </div>
  );
};

export default Page2;
