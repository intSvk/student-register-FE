import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from './TextError'

const RegisterWithFormikRefactored = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "",
    accept: false,
  };

  const onSubmit = (values) => {
    console.log("onSubmit :", values);
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    mobile: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
  });

  return (
    <>
      <div className="container mt-5">
        <h2>Register Yourself</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="mb-3">
            <div className="row">
              <div className="col-md-5">
                {/* <div> */}
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    type="text"
                  ></Field>
                  <ErrorMessage name="firstName" component = {TextError} />
                {/* </div> */}
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    type="text"
                  ></Field>
                </div>
                <div>
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <Field
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  type="text"
                ></Field>
                <ErrorMessage name="mobile">{(errorMsg)=><div className="error">{errorMsg}</div>
                }</ErrorMessage>
                </div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                ></Field>
                <ErrorMessage className="error" name="email" />

                <div className="row">
                  <div className="col">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <Field
                      id="dob"
                      className="form-control"
                      type="date"
                    ></Field>
                  </div>
                  <div className="col">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      className="form-select"
                      aria-label="Select Gender"
                    >
                      <option value="">Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </Field>
                  </div>
                </div>

                <div className="form-check">
                  <Field
                    id="accept"
                    name="accept"
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label htmlFor="accept" className="form-check-label">
                    Accept Terms and Conditions
                  </label>
                </div>
                <div className="d-flex justify-content-md-center">
                  <button type="submit" className="btn btn-primary mb-4">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegisterWithFormikRefactored;
