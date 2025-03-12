const Footer = () => {
  return (
    <div className="bg-[#d2eef9] p-8 pt-28" >
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-3xl font-[Fredoka] font-bold text-[#285192] mb-4">
            Connect with us
          </h3>
          <div className="flex gap-4 mb-4">
            <a href="#">
              <img
                src="/assets/BG/insta.svg"
                alt="Instagram"
                className="h-20 w-20"
              />
            </a>
            <a href="#">
              <img
                src="/assets/BG/whatsapp.svg"
                alt="Instagram"
                className="h-20 w-20"
              />
            </a>
            <a href="#">
              <img
                src="/assets/BG/facebook.svg"
                alt="Instagram"
                className="h-20 w-20"
              />
            </a>
          </div>
        </div>

        <div className="text-start  md:text-start w-1/4 ">
          <p className="text-lg text-[#285192] font-[Fredoka] mb-2">
            Plot No: 403, Phase - 2, Industrial Area, Scheme No:78, Part - 1, MR
            11, Dewas Naka, Niranjanpur, Indore, Madhya Pradesh 452010
          </p>
          <p className="text-lg font-[Fredoka] text-[#285192] mb-2 flex gap-4 items-center">
            <img src="/assets/BG/phone.svg" className="w-6 h-6" /> +91
            7024221305
          </p>

          <p className="text-lg font-[Fredoka] text-[#285192] mb-2 flex gap-4 items-center">
            <img src="/assets/BG/gmail.svg" className="w-6 h-6" /> info@grannystreat.in
          </p>
        </div>
      </div>

      <div className="text-center mt-12 font-[Fredoka] font-semibold  text-[#285192]">
        <p className="text-lg text-[#285192]">
          Copyright © 2025 Granny&apos;s Treat
        </p>
      </div>
    </div>
  );
};

export default Footer;
