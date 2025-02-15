/* eslint-disable react/prop-types */
import ReviewAvatar from "./ReviewAvatar";
import UploadBox from "./UploadBox";
import Errors from "./Errors";

function UploadAvatarContainer({ errors, values, setFieldValue }) {
  return (
    <section className="h-[190px] w-full flex flex-col gap-[12px] ">
      <h2 className="text-white font-[Inconsolata-Medium] text-[20px] tracking-[-0.5px] leading-[24px]">
        Upload Avatar
      </h2>

      {!errors.file && values.file ? (
        <ReviewAvatar setFieldValue={setFieldValue} values={values} />
      ) : (
        <UploadBox setFieldValue={setFieldValue} />
      )}

      <Errors errors={errors} />
    </section>
  );
}

export default UploadAvatarContainer;
