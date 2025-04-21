const Page1 = () => {
  return (
    <div className="relative h-[130vh] w-full bg-[url('/assets/bg1.png')] bg-cover bg-center bg-no-repeat bg-[#d2eef9]">
      {/* Main content container with responsive padding */}
      <div className="relative h-screen w-full flex flex-col  items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 md:pt-40" >
        {/* Heading with responsive text sizes */}
        <h1
          className="font-[Fredoka] text-[#285192] font-semibold text-center text-[clamp(2rem,5vw,5rem)] leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[60%]"
        >
          TASTES LIKE HOME
        </h1>

        {/* Subheading with responsive text sizes */}
        <h3
          className="font-[Fredoka] text-[#285192] font-medium text-center  text-[clamp(1rem,2vw,2rem)] leading-snug max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[60%]"
        >
          Quality That Brings Homemade Goodness to Your Table
        </h3>
        <img src="/assets/BG/button.svg" alt="bg1" className="w-[clamp(10rem,20vw,15rem)] h-auto mt-4" />
      </div>
      {/* Background image with responsive handling */}

    </div>
  );
};

export default Page1;
