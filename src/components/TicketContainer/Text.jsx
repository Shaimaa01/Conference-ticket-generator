import { useLocation } from "react-router-dom";

function Text() {
  const location = useLocation();
  const values = location.state || {}; // Get passed values
  console.log(values)
  return (
    <section className="max-sm:max-w-[343px] mx-auto mt-[69px] max-lg:mt-[59px] max-sm:mt-[40px] max-sm:px-[16px] text-center justify-center items-center flex flex-col gap-[32px] max-sm:gap-[20px]">
      <h2 className="text-white text-[60px] max-sm:text-[30px] tracking-[-1px]  leading-[66px] max-sm:leading-[33px] font-[Inconsolata-ExtraBold] max-w-[800px]   mx-auto ">Congrats, <span className="bg-gradient-to-r from-[#F57463] to-[#FFFFFF] bg-clip-text text-transparent">{values.fullName}!</span> Your ticket is ready.</h2>
      <p className="max-w-[514px] text-[#D1D0D5] font-[Inconsolata-Medium] text-[24px] max-sm:text-[20px] tracking-[-0.5px] max-sm:tracking-[-0.5px]  leading-[28.8px] max-sm:leading-[24px]   ">We&apos;ve emailed your ticket to <span className="text-[#F57463]">{values.email}</span> and will send updates in the run up to the event.</p>
    </section>
  );
}

export default Text;
