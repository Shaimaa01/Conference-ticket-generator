/* eslint-disable react/prop-types */
import IconInfo from "../IconInfo";

function Errors({ errors }) {
  return (
    <p
      className={` font-[Inconsolata-Regular] tracking-[-0.2px] leading-[14.4px] text-[12px] flex items-center gap-[8px] ${
        errors.file ? "text-orange-500" : "text-neutral-300"
      }`}
    >
      <IconInfo />
      <span>
        {errors.file
          ? errors.file
          : "Upload your photo (JPG or PNG, max size: 500KB)."}
      </span>
    </p>
  );
}

export default Errors;
