import ContactForm from "../app/ContactForm";

const Page9 = () => {
  return (
    <div className="h-fit w-full bg-[#d2eef9] relative">
      <p className="font-[Fredoka] text-[#285192] font-extrabold text-center text-3xl md:text-5xl  tracking-wider">
        Drop us a message!
      </p>
      <ContactForm />

      <img
        src="/assets/p3/strawberry-group.png"
        alt="Decorative strawberry illustration"
        className="absolute w-[clamp(80px,22vw,285px)] h-auto aspect-square
        top-[8%] sm:top-[12%] md:top-[18%] lg:top-[30%] 
        left-[2%] sm:left-[6%] md:left-[10%] lg:-left-[5%]
         opacity-50 pointer-events-none select-none z-0"
      />
      <img
        src="/assets/p3/melisa-1.png"
        alt="Decorative strawberry illustration"
        className="absolute w-[clamp(80px,22vw,285px)] h-auto aspect-square
        top-[8%] sm:top-[12%] md:top-[18%] lg:top-[30%] 
        right-[2%] sm:right-[6%] md:right-[10%] lg:-right-[8%]
         opacity-50 pointer-events-none select-none z-0"
      />
    </div>
  );
};

export default Page9;
