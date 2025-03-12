const Page1 = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/assets/bg1.png')] bg-cover bg-center bg-no-repeat bg-[#d2eef9]">
      {/* Main content container with responsive padding */}
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8">
        {/* Heading with responsive text sizes */}
        <h1
          className="font-[Fredoka] text-[#285192] font-semibold text-center
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          max-w-[90%] sm:max-w-[85%] md:max-w-[80%]"
        >
          TASTES LIKE HOME
        </h1>

        {/* Subheading with responsive text sizes */}
        <h3
          className="font-[Fredoka] text-[#285192] font-semibold text-center
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
          max-w-[90%] sm:max-w-[85%] md:max-w-[80%]"
        >
          Quality That Brings Homemade Goodness to Your Table
        </h3>
        <img src="/assets/BG/button.svg" alt="bg1" className=" w-60 h-40 " />
      </div>

      {/* Background image with responsive handling */}
      <img
        src="/assets/BG/page1_down.png"
        alt="bg1"
        className="absolute top-0 left-0 w-full h-full object-cover
          pointer-events-none select-none"
      />
    </div>
  );
};

export default Page1;
