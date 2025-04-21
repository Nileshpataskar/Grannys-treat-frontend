const Page4 = () => {
  return (
    <div className="w-full bg-[#d2eef9] py-16 px-4 sm:px-6 md:px-20 relative">
      <div className="w-full flex flex-col items-center">
        {/* Heading */}
        <h3 className="font-[Fredoka] text-[#285192] font-extrabold text-center tracking-wider
          text-[clamp(1.75rem,5vw,3.5rem)] mt-10"
        >
          Our Journey to Healthier Dairy
        </h3>

        {/* Content Container */}
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 mt-10 items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 pt-10 md:pt-20 flex justify-center">
            <img
              src="/assets/photo.png"
              alt="Dairy Journey"
              className="w-full md:max-w-[500px] md:h-[580px] h-auto"
            />
          </div>
         
          <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
            <img
              src="/assets/photo2.png"
              alt="Healthy Dairy"
              className="w-full max-w-[400px] md:max-w-[500px] md:h-[300px] h-auto"
            />

            <p
              className="font-[Fredoka] text-[#285192] font-medium leading-relaxed 
                text-[clamp(1rem,2.5vw,1.25rem)]"
            >
              At Granny&apos;s Treat, our story began with a simple truth — traditional dahi isn’t just delicious,
              it’s naturally rich in probiotics that support gut health and immunity.
              <br />
              <br />
              Inspired by this, we set out to create dairy that’s fresh, pure, and free from antibiotics —
              because real nourishment should never come with compromises.
              <br />
              <br />
              We keep things simple: high-quality milk, no shortcuts, and probiotic-rich products that support
              your health, your lifestyle, and your taste buds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
