import iconUpload from "/public/assets/images/icon-upload.svg";
import iconInfo from "/public/assets/images/icon-info.svg";
import { useState } from "react";
function Form() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  // Maximum file size (500KB)
  const MAX_FILE_SIZE = 500 * 1024; // 500KB in bytes

  // Handle file selection via input
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateFile(selectedFile);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  // Validate file size and type
  const validateFile = (file) => {
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError("File size exceeds the maximum limit of 500KB.");
        setFile(null);
      } else if (!file.type.match(/image\/(jpeg|png)/)) {
        setError("Only JPG or PNG files are allowed.");
        setFile(null);
      } else {
        setError("");
        setFile(file);
      }
    }
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mt-[45px] mx-auto w-[460px] flex flex-col items-center justify-center">
      {/* upload avater */}
      <div className="h-[190px] w-full flex flex-col gap-[12px] ">
        <h2 className="text-white font-[Inconsolata-Medium] text-[20px] tracking-[-0.5px] leading-[24px]">
          Upload Avatar
        </h2>
        <label
          htmlFor="file-upload"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="custom-dashed group cursor-pointer rounded-[12px] h-[126px] py-[12px] px-[16px] flex flex-col items-center justify-center gap-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-500 focus-within:bg-[#ffffff14]"
        >
          <input
            type="file"
            id="file-upload"
            className="absolute opacity-0"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <div className="border border-neutral-700 group-hover:border-neutral-500 rounded-[12px] backdrop-blur-[24px] shadow-[0px_2px_4px_-2px_#040128] bg-[#ffffff1a] w-[50px] h-[50px] flex items-center justify-center ">
            <img src={iconUpload} alt="icon-upload" />
          </div>
          <p className="text-neutral-300 tracking-0 leading-[21.6px] text-[18px] font-[Inconsolata-Regular]">
            Drag and drop or click to upload
          </p>
        </label>
        <p className="text-neutral-300 font-[Inconsolata-Regular] tracking-[-0.2px] leading-[14.4px] text-[12px] flex items-center gap-[8px] ">
          <img src={iconInfo} alt="icon info" />
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </p>
        {file && (
          <p className="text-neutral-300 text-[14px]">
            Selected file: {file.name}
          </p>
        )}
        {error && <p className="text-red-500 text-[14px]">{error}</p>}
        {file && file.type.match(/image\/(jpeg|png)/) && (
          <div className="w-[40px] h-[40px]  ">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full "
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Form;
