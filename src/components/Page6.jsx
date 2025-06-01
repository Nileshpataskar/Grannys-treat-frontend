import VideoSlider from "../app/Videos/VideoSlider";

const Page6 = () => {
  return (
    <div className="h-[140vh] w-full  bg-[#d2eef9] relative">
      <div className="w-full flex mb-32 gap-10 z-20 justify-center items-center flex-col ">
        <img
          src="/assets/BG/Vector.png"
          alt="img"
          className="absolute -top-20 h-40 w-full md:h-60 lg:h-80"
        />


        <h3 className="font-[Fredoka] z-10 text-[#285192] font-[800] text-center mt-56 text-3xl md:text-4xl lg:text-5xl tracking-wider">
          The real stories
        </h3>
        <VideoSlider />
      </div>

      {/* <img
        src="/assets/BG/strawberry_page6.svg"
        alt="straw"
        className="absolute w-[150px] z-0 h-[150px] top-[10%] left-[70%] -rotate-[26deg] opacity-80 md:w-[205px] md:h-[208px] md:top-[18  0px] md:left-[900px]"
      /> */}
      <img
        src="/assets/BG/leaf.svg"
        alt="straw"
        className="absolute w-[150px] h-[150px] top-[20%] left-[10%] -rotate-[26deg] md:w-[205px] md:h-[208px] md:top-[300px] md:left-[100px]"
      />
      <img
        src="/assets/BG/leaf.svg"
        alt="straw"
        className="absolute w-[150px] h-[150px] top-[20%] right-[10%] -rotate-[26deg] md:w-[205px] md:h-[208px] md:top-[300px] md:right-[100px]"
      />
    </div>
  );
};

export default Page6;
