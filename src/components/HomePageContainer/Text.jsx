function Text() {
  return (
    <section className="text-center mt-[60px] max-sm:mt-[40px]  flex flex-col  gap-[20px] max-sm:max-w-[343px] mx-auto max-sm:px-[16px]">
      <h1 className="text-white text-[60px] max-sm:text-[30px] tracking-[-1px]  leading-[66px] max-sm:leading-[33px] font-[Inconsolata-ExtraBold] max-w-[790px]  mx-auto ">Your Journey to Coding Conf  {new Date().getFullYear()} Starts Here! </h1>
      <p className="text-[#D1D0D5] font-[Inconsolata-Medium] text-[24px] max-sm:text-[20px] tracking-[-0.5px] max-sm:tracking-[-0.5px]  leading-[28.8px] max-sm:leading-[24px]   ">Secure your spot at next year’s biggest coding conference.</p>
    </section>
  );
}

export default Text;
