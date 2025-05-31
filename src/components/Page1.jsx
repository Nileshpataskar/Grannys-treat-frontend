import OptimizedImage from './OptimizedImage';

const Page1 = () => {
  return (
    <div className="relative h-[130vh] w-full bg-[url('/assets/bg1.png')] bg-cover bg-center bg-no-repeat bg-[#d2eef9]">
      <header className=" w-screen z-50 bg-transparent px-4 sm:px-6 md:px-10">
        <div className="max-w-full mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <OptimizedImage
              src="/assets/logo.png"
              alt="logo"
              width={120}
              height={120}
              className="w-[clamp(4rem,8vw,7.5rem)] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div></div>
          </nav>

          {/* Right Section: Desktop Contact & Mobile Hamburger */}
          <div className="flex items-center">
            {/* Desktop "Contact Us" text */}
            <div className="hidden md:block">
              <h1 className="font-[Fredoka] text-[#285192] font-semibold text-[clamp(1rem,2vw,1.8rem)]">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </header>
      {/* Main content container with responsive padding */}
      <div className="relative h-screen w-full flex flex-col  items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 md:pt-40">
        {/* Heading with responsive text sizes */}
        <h1 className="font-[Fredoka] text-[#285192] font-semibold text-center text-[clamp(2rem,5vw,5rem)] leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[60%]">
          TASTES LIKE HOME
        </h1>

        {/* Subheading with responsive text sizes */}
        <h3 className="font-[Fredoka] text-[#285192] font-medium text-center  text-[clamp(1rem,2vw,2rem)] leading-snug max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[60%]">
          Quality That Brings Homemade Goodness to Your Table
        </h3>
        <OptimizedImage
          src="/assets/BG/button.svg"
          alt="bg1"
          width={240}
          height={80}
          className="w-[clamp(10rem,20vw,15rem)] h-auto mt-4"
        />
      </div>
      {/* Background image with responsive handling */}
    </div>
  );
};

export default Page1;
