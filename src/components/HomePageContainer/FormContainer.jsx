import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UploadAvatarContainer from "./UploadAvatar/UploadAvatarContainer";
import IconInfo from "./IconInfo";
import { useNavigate } from "react-router-dom";

function FormContainer() {
  const navigate = useNavigate();
  const initialValues = {
    file: null,
    fullName: "",
    email: "",
    github: "",
  };

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
      onSubmit={(values) => {
        console.log("Uploaded file:", values.file);
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/ticket", { state: values }); // Navigate to the Ticket page on submit
      }}
    >
      {({ setFieldValue, errors, values, touched }) => {
        return (
          <Form
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
                e.preventDefault(); 
                document.querySelector("button[type='submit']").click(); 
              }
            }}
            className="mt-[45px] max-sm:mt-[40px] max-sm:px-[16px] mx-auto lg:w-[460px] max-lg:w-[522px] max-sm:w-[100%] flex flex-col gap-[24px] items-center justify-center  relative z-10"
          >
            <UploadAvatarContainer
              errors={errors}
              values={values}
              setFieldValue={setFieldValue}
            />
            {/* Full Name */}
            <label className="w-full  flex flex-col gap-[12px]">
              <span className="font-[Inconsolata-Medium] text-[20px] leading-[24px] tracking-[-0.5px] text-white">
                Full Name
              </span>
              <Field
                id="fullName"
                name="fullName"
                type="text"
                className={`w-full h-[54px] rounded-[12px] border border-[#8784A5] cursor-pointer p-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] text-neutral-300  text-[18px] font-[Inconsolata-Regular] leading-[21.6px] tracking-0  focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#8784A5] ${
                  errors.fullName && touched.fullName
                    ? "border-[#F57463]"
                    : "border-[#8784A5]"
                } `}
              />
              {errors.fullName && touched.fullName && (
                <p
                  className={` font-[Inconsolata-Regular] tracking-[-0.2px] leading-[14.4px] text-[12px] flex items-center gap-[8px] ${
                    errors.fullName ? "text-[#F57463]" : "text-neutral-300"
                  }`}
                >
                  <IconInfo />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </label>

            {/* Email */}
            <label className="w-full  flex flex-col gap-[12px]">
              <span className="font-[Inconsolata-Medium] text-[20px] leading-[24px] tracking-[-0.5px] text-white">
                Email Address
              </span>
              <Field
                name="email"
                type="email"
                placeholder="example@email.com"
                className={`w-full h-[54px] rounded-[12px] border  cursor-pointer p-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] placeholder:text-neutral-300 text-neutral-300  text-[18px] font-[Inconsolata-Regular] leading-[21.6px] tracking-0 focus:outline-2 focus:outline-offset-2 focus:outline-[#8784A5] ${
                  errors.fullName && touched.email
                    ? "border-[#F57463]"
                    : "border-[#8784A5]"
                } `}
              />
              {errors.email && touched.email && (
                <p
                  className={` font-[Inconsolata-Regular] tracking-[-0.2px] leading-[14.4px] text-[12px] flex items-center gap-[8px] ${
                    errors.email ? "text-[#F57463]" : "text-neutral-300"
                  }`}
                >
                  <IconInfo />
                  <span>{errors.email}</span>
                </p>
              )}
            </label>

            {/* GitHub Username */}
            <label className="w-full  flex flex-col gap-[12px]">
              <span className="font-[Inconsolata-Medium] text-[20px] leading-[24px] tracking-[-0.5px] text-white">
                GitHub Username
              </span>
              <Field
                placeholder="@yourusername"
                name="github"
                type="text"
                className={`w-full h-[54px] rounded-[12px] border  cursor-pointer p-[16px] bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-[5px] placeholder:text-neutral-300 text-neutral-300  text-[18px] font-[Inconsolata-Regular] leading-[21.6px] tracking-0 focus:outline-2 focus:outline-offset-2 focus:outline-[#8784A5] ${
                  errors.fullName && touched.github
                    ? "border-[#F57463]"
                    : "border-[#8784A5]"
                } `}
              />
              {errors.github && touched.github && (
                <p
                  className={` font-[Inconsolata-Regular] tracking-[-0.2px] leading-[14.4px] text-[12px] flex items-center gap-[8px] ${
                    errors.github ? "text-[#F57463]" : "text-neutral-300"
                  }`}
                >
                  <IconInfo />
                  <span>{errors.github}</span>
                </p>
              )}
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[54px] rounded-[12px]  bg-[#F57463] hover:bg-[#E1604F] hover:shadow-[0px_4px_0px_0px_#F57463] cursor-pointer py-[16px] font-[Inconsolata-ExtraBold] text-[20px] leading-[20px] tracking-[-0.3px] text-[#0D082D] focus:outline-2 focus:outline-offset-2 focus:outline-white focus:shadow-[0px_0px_0px_3px_#0D082D]"
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
