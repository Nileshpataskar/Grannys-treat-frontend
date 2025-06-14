const ContactForm = () => {
  return (
    <div className="bg-[#d2eef9] p-8 rounded-lg max-w-xl mx-auto mt-10">
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5  border-[6px] border-[#55acee] rounded-xl placeholder:text-[#fff] placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-1 focus:ring-[#55acee] cursor-text"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-5  border-[6px] border-[#55acee] rounded-xl placeholder:text-[#fff] placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-1 focus:ring-[#55acee]"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Topic"
            className="w-full p-5  border-[6px] border-[#55acee] rounded-xl placeholder:text-[#fff] placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-1 focus:ring-[#55acee]"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message...."
            rows={7}
            className="w-full p-5  border-[6px] border-[#55acee] rounded-xl placeholder:text-[#fff] placeholder:text-xl placeholder:font-bold focus:outline-none focus:ring-1 focus:ring-[#55acee]"
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
