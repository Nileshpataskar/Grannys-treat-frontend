"use client";

const Header = () => {
  const navbarData = ["Products", "Ourstory", "Benefits", "Testimonials"];

  return (
    <header className="fixed w-screen z-50 bg-transparent px-4 sm:px-6 md:px-10">
      <div className="max-w-full mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-[clamp(3rem,8vw,7.5rem)] h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div
            className="flex gap-[clamp(1rem,2vw,2rem)] px-20 py-2 bg-[#285192] rounded-full">
            {navbarData.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] px-3"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Right Section: Desktop Contact & Mobile Hamburger */}
        <div className="flex items-center">
          {/* Desktop "Contact Us" text */}
          <div className="hidden md:block">
            <h1 className="font-[Fredoka] text-[#285192] text-[clamp(1rem,2vw,1.8rem)]">
              Contact Us
            </h1>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button>
              <svg
                className="w-6 h-6 text-[#285192]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
