const Page4 = () => {
  return (
    <div className="h-auto w-full bg-[#d2eef9] py-16 px-6 md:px-20 relative">
      <div className="w-full flex flex-col items-center">
        {/* Heading */}
        <h3 className="font-[Fredoka] text-[#285192] font-extrabold text-center text-3xl md:text-5xl mt-10 tracking-wider">
          Our Journey to Healthier Dairy
        </h3>

        {/* Content Container */}
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 mt-10 items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/photo.png"
              alt="Dairy Journey"
              className="w-full max-w-[500px] md:max-w-[726px] h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <img
              src="/assets/photo2.png"
              alt="Healthy Dairy"
              className="w-full max-w-[400px] md:max-w-[879px] h-auto"
            />
            <h3 className="text-base md:text-xl text-[#285192] font-medium font-[Fredoka] leading-relaxed">
              At Granny&apos;s, our journey began with a simple yet powerful
              realization: probiotics are essential for maintaining a healthy
              gut. We discovered that the traditional, plain dahi (curd) from
              our kitchen shelf was not just delicious but a natural source of
              these gut-friendly probiotics.
              <br />
              <br />
              This humble staple, packed with beneficial bacteria, is more than
              enough to support a strong and resilient immune system. This
              understanding drove us to ensure that the milk we use is not only
              fresh and pure but also free from antibiotics.
              <br />
              <br />
              We believe in keeping things simple, high quality, and naturally
              nourishing. Our products are designed to support your health, your
              lifestyle, and your taste buds.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
