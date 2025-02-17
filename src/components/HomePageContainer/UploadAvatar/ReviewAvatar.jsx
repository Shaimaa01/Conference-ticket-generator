/* eslint-disable react/prop-types */
import { handleFileChange } from "/src/utils/handleFileChange.js";
import { removeImg } from "/src/utils/removeImage.js";

function ReviewAvatar({ setFieldValue, values }) {
  return (
    <section className="custom-dashed group  rounded-[12px] h-[126px] py-[12px] px-[16px] flex flex-col items-center justify-center gap-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-500 focus-within:bg-[#ffffff14] ">
      <div className="border border-neutral-700 group-hover:border-neutral-500 rounded-[12px] backdrop-blur-[24px] shadow-[0px_2px_4px_-2px_#040128] bg-[#ffffff1a] w-[50px] h-[50px] flex items-center justify-center overflow-hidden">
        <input
          type="file"
          id="file-upload"
          className="absolute opacity-0 pointer-events-none"
          accept=".jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(e, setFieldValue)}
        />
        <img
          src={URL.createObjectURL(values.file)}
          alt="preview"
          className=" w-[50px] min-h-full"
        />
      </div>
      <div className="flex w-[180px] h-[22px] gap-[8px] text-center justify-center items-center">
        <button
          type="button"
          onClick={() => removeImg(setFieldValue)}
          className="font-[Inconsolata-Regular] rounded-[4px] text-[12px] leading-[14.4px] tracking-[-0.2px] cursor-pointer underline underline-offset-2 text-neutral-300 bg-[#ffffff1a] w-full h-full"
        >
          Remove image
        </button>
        <button
          type="button"
          onClick={() => document.getElementById("file-upload").click()}
          className="font-[Inconsolata-Regular] rounded-[4px] text-[12px] leading-[14.4px] tracking-[-0.2px] cursor-pointer text-neutral-300 bg-[#ffffff1a] w-full h-full my-auto"
        >
          Change image
        </button>
      </div>
    </section>
  );
}

export default ReviewAvatar;
