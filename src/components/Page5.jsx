const Page5 = () => {
  return (
    <div className="h-auto min-h-screen w-full bg-[#55acee] relative z-10 flex flex-col items-center justify-center ">
     
      {/* Top Image */}
      <img
        src="/assets/BG/page5_top.png"
        alt="img"
        className="absolute top-0 w-full h-32 md:h-40 "
      />

      {/* Text Image */}
      <img
        src="/assets/BG/page5_text.svg"
        alt="img"
        className="w-[90%] max-w-[400px] md:max-w-[800px] mt-60"
      />

      {/* Design Image */}
      <img
        src="/assets/BG/page5_design.svg"
        alt="img"
        className="w-[95%] max-w-[500px] md:max-w-[1000px] h-auto mt-6"
      />
    </div>
  );
};

export default Page5;
