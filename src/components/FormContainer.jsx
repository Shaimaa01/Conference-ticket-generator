import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UploadAvatarContainer from "./UploadAvatar/UploadAvatarContainer";

function FormContainer() {
  const initialValues = {
    file: null,
    fullName: "",
    email: "",
    github: "",
  };

  // Maximum file size (500KB)
  const MAX_FILE_SIZE = 500 * 1024; // 500KB in bytes

  const validationSchema = Yup.object({
    file: Yup.mixed()
      .required("File is required")
      .test("File too large. Please upload a photo under 500KB.", (file) =>
        file ? file.size <= MAX_FILE_SIZE : true
      )
      .test(
        "fileType",
        "Only JPG or PNG files are allowed.",
        (file) => file && ["image/jpeg", "image/png"].includes(file.type)
      ),
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    github: Yup.string().required("GitHub username is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Uploaded file:", values.file)}
    >
      {({ setFieldValue, errors, values }) => {
        return (
          <Form className="mt-[45px] mx-auto w-[460px] flex flex-col gap-[24px] items-center justify-center  relative z-10">
            <UploadAvatarContainer
              errors={errors}
              values={values}
              setFieldValue={setFieldValue}
            />
            {/* Full Name */}
            <label className="w-full h-[90px] flex flex-col gap-[12px]">
              <span className="font-[Inconsolata-Medium] text-[20px] leading-[24px] tracking-[-0.5px] text-white">
                Full Name
              </span>
              <Field
                id="fullName"
                name="fullName"
                type="text"
                className="w-full h-[54px] rounded-[12px] border border-[#8784A5] cursor-pointer p-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] text-neutral-300  text-[18px] font-[Inconsolata-Regular] leading-[21.6px] tracking-0"
              />
              <ErrorMessage name="fullName" component="p" className="error" />
            </label>

            {/* Email */}
            <label className="w-full h-[90px] flex flex-col gap-[12px]">
              <span className="font-[Inconsolata-Medium] text-[20px] leading-[24px] tracking-[-0.5px] text-white">
                Email Address
              </span>
              <Field
                name="email"
                type="email"
                placeholder="example@email.com"
                className="w-full h-[54px] rounded-[12px] border border-[#8784A5] cursor-pointer p-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] placeholder:text-neutral-300 text-neutral-300  text-[18px] font-[Inconsolata-Regular] leading-[21.6px] tracking-0"
              />
              <ErrorMessage name="email" component="p" className="error" />
            </label>

            {/* GitHub Username */}
            <label className="w-full h-[90px] flex flex-col gap-[12px]">
              <span className="font-[Inconsolata-Medium] text-[20px] leading-[24px] tracking-[-0.5px] text-white">
                GitHub Username
              </span>
              <Field
                placeholder="@yourusername"
                name="github"
                type="text"
                className="w-full h-[54px] rounded-[12px] border border-[#8784A5] cursor-pointer p-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] placeholder:text-neutral-300 text-neutral-300  text-[18px] font-[Inconsolata-Regular] leading-[21.6px] tracking-0"
              />
              <ErrorMessage name="github" component="p" className="error" />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[54px] rounded-[12px]  bg-[#F57463] py-[16px] font-[Inconsolata-ExtraBold] text-[20px] leading-[20px] tracking-[-0.3px] text-[#0D082D]  "
            >
              Generate My Ticket
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormContainer;
