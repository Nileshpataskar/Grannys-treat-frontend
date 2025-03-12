const ContactForm = () => {
  return (
    <div className="bg-[#d2eef9] p-8 rounded-lg max-w-md mx-auto mt-10">
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3  border-4 border-[#285192] rounded-xl placeholder:text-white placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#285192] cursor-text"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3  border-4 border-[#285192] rounded-xl placeholder:text-white placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#285192]"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Topic"
            className="w-full p-3  border-4 border-[#285192] rounded-xl placeholder:text-white placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#285192]"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message...."
            rows={4}
            className="w-full p-3  border-4 border-[#285192] rounded-xl placeholder:text-white placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-4 focus:ring-[#285192]"
          />
        </div>
        <button type="submit" className=" w-full justify-center flex cursor-pointer ">
          <img src="/assets/BG/button.svg" alt="send" className="w-44" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
