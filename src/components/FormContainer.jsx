import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UploadAvatarContainer from "./UploadAvatar/UploadAvatarContainer";

function FormContainer() {
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
  });

  const initialValues = {
    file: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Uploaded file:", values.file)}
    >
      {({ setFieldValue, errors, touched, values }) => {
        return (
          <Form className="mt-[45px] mx-auto w-[460px] flex flex-col items-center justify-center">
            <UploadAvatarContainer
              errors={errors}
              values={values}
              setFieldValue={setFieldValue}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormContainer;
