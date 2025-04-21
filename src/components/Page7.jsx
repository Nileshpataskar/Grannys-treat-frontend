import FullWidthMap from "../helperComponents/FullWidthMap";

const Page7 = () => {
  return (
    <div className="h-fit w-full  bg-[#55acee] relative z-10 py-20">
      <div className="w-full flex gap-10 justify-center items-center flex-col  ">
        <div className="mt-28 flex flex-col gap-4">
          <h1 className="font-[Fredoka] z-20 text-[#285192]  font-extrabold text-center text-3xl md:text-5xl  tracking-wider">
            Where to buy?
          </h1>
          <h3 className="font-[Fredoka] z-20 text-[#285192] font-normal text-center text-2xl md:text-3xl  tracking-wider">
            Find a store with our products near your home
          </h3>
        </div>
        <div className="md:w-7xl p-10 ">

          <FullWidthMap />
        </div>
      </div>
      <img
        src="/assets/BG/page8_top.png"
        alt="img"
        className="absolute top-0 z-5   h-40 w-full md:h-50 "
      />
    </div>

  );
};

export default Page7;
