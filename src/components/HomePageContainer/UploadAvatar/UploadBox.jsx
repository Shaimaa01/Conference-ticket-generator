/* eslint-disable react/prop-types */
import iconUpload from "/assets/images/icon-upload.svg";
import { dragAndDrop } from "../../../utils/dragAndDrop.js";
import { handleFileChange } from "/src/utils/handleFileChange.js";

function UploadBox({ setFieldValue }) {
  const { handleDragOver, handleDrop } = dragAndDrop(setFieldValue);

  return (
    <label
      htmlFor="file-upload"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`custom-dashed group cursor-pointer rounded-[12px] h-[126px] py-[12px] px-[16px] flex flex-col items-center justify-center gap-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#8784A5] `}
    >
      <input
        type="file"
        id="file-upload"
        className="absolute opacity-0 pointer-events-none"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => handleFileChange(e, setFieldValue)}
      />
      <div className="border border-neutral-700 group-hover:border-neutral-500 rounded-[12px] backdrop-blur-[24px] shadow-[0px_2px_4px_-2px_#040128] bg-[#ffffff1a] w-[50px] h-[50px] flex items-center justify-center overflow-hidden">
        <img src={iconUpload} alt="icon-upload" />
      </div>

      <p className="text-neutral-300 tracking-0 leading-[21.6px] text-[18px] font-[Inconsolata-Regular]">
        Drag and drop or click to upload
      </p>
    </label>
  );
}

export default UploadBox;
