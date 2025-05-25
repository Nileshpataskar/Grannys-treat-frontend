const Page5 = () => {
  return (
    <div className="h-auto min-h-screen w-full bg-[#55acee] relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      {/* Top Image */}
      <img
        src="/assets/BG/page5_top.png"
        alt="img"
        className="absolute top-0 w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover"
      />

      {/* Content Container */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        {/* Text Image */}
        <img
          src="/assets/BG/page5_text.svg"
          alt="img"
          className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[400px] sm:max-w-[600px] md:max-w-[800px] transition-all duration-300"
        />

        {/* Design Image */}
        <img
          src="/assets/BG/page5_design.svg"
          alt="img"
          className="w-[95%] sm:w-[90%] md:w-[85%] max-w-[500px] sm:max-w-[700px] md:max-w-[1000px] h-auto transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Page5;
