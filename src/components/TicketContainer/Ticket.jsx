import patternLogoMark from "/assets/images/logo-mark.svg";
import { useLocation } from "react-router-dom";
import iconGithub from "/assets/images/icon-github.svg";

function Ticket() {
  const location = useLocation();
  const values = location.state || {}; // Get passed values

  return (
    <section className="backdrop-blur-md relative mt-[111px] max-lg:mt-[80px] max-sm:mt-[72px] mx-auto bg-cover w-[602px] max-sm:w-[343px] max-sm:h-[160px] h-[280.9px] bg-[url('/assets/images/pattern-ticket.svg')] p-[24px] max-sm:p-[16px] flex flex-col justify-between">
      <div className="flex gap-[20px] max-sm:gap-[12px] items-start ">
        <img
          src={patternLogoMark}
          alt="Logo"
          className="mt-[6px] max-sm:mt-[4px] max-sm:w-[29px] max-sm:h-[29px] "
        />
        <div>
          <h3 className="font-[Inconsolata-Bold] text-[40px] max-sm:text-[24px] leading-[44px] max-sm:leading-[26.4px] tracking-[-1px] text-white mb-[12px] max-sm:mb-[8px]">
            Coding Conf
          </h3>
          <p className="font-[Inconsolata-Regular] text-[18px] max-sm:text-[14px] leading-[21.6px] max-sm:leading-[16.8px] tracking-0 text-[#D1D0D5]">
            Jan 31, {new Date().getFullYear()} / Austin, TX
          </p>
        </div>
      </div>
      {values.file && (
        <div className="flex gap-[16px] max-sm:gap-[12px] items-center  h-[80px] max-sm:h-[45px] overflow-hidden ">
          <img
            src={URL.createObjectURL(values.file)}
            alt="avater img"
            className="w-[80px] max-sm:w-[45px] h-full  rounded-[12px]"
          />

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-[Inconsolata-Medium] text-[30px] max-sm:text-[20px] leading-[33px] max-sm:leading-[22px] tracking-[-1px] text-[#FFFFFF]  ">
              {values.fullName}
            </h4>
            <div className="flex gap-[10px] max-sm:gap-[4px]">
              <a
                href={`https://github.com/${values.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={iconGithub}
                  alt="GitHub"
                  className="w-[21.2px] h-[22px] max-sm:w-[15.3px] max-sm:h-[16px]"
                />
              </a>
              <p className="text-[#D1D0D5] font-[Inconsolata-Medium] text-[20px] max-sm:text-[14px] leading-[24px] max-sm:leading-[16.8px] tracking-[-0.5px] max-sm:tracking-0 ">
                {values.github}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* random number */}
      <p className="absolute top-[50%] translate-y-[-50%] right-0 rotate-90 font-[Inconsolata-Medium] text-[30px] max-sm:text-[22px] leading-[33px] max-sm:leading-[24.2px] tracking-[-1px] text-[#8784A5]">
        #01609
      </p>
    </section>
  );
}

export default Ticket;
