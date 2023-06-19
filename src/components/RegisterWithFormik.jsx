import React, { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const RegisterWithFormik = () => {
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

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   }
  //   if (!values.mobile) {
  //     errors.mobile = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   }
  //   // else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,4}$i/.test(values.email)){
  //   //   errors.email='Invalid Email'
  //   // }
  //   return errors;
  // };

  const validationSchema = yup.object({
    firstName : yup.string().required('Required'),
    mobile: yup.string().required('Required'),
    email:yup.string().email('Invalid Email').required('Required')
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.errors);

  // useEffect(()=>{
  // console.log(user);
  // },[user])

  return (
    <>
      <div className="container mt-5">
        <h2>Register Yourself</h2>
        <form onSubmit={formik.handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                className="form-control"
                type="text"
                value={formik.values.firstName}
                // placeholder="Enter First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='error'>{formik.errors.firstName}</div>
              ) : null}
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                id="lastName"
                className="form-control"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                // placeholder="Enter Last Name"
              ></input>
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                id="mobile"
                className="form-control"
                type="text"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                // placeholder="Enter Mobile Number"
              ></input>
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className='error'>{formik.errors.mobile}</div>
              ) : null}
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="form-control"
                type="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}

                // placeholder="Enter Email"
              ></input>
              {formik.touched.email && formik.errors.email ? (
                <div className='error'>{formik.errors.email}</div>
              ) : null}
              <div className="row">
                <div className="col">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    className="form-control"
                    type="date"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    // placeholder="Choose Date of Birth"
                  ></input>
                </div>
                <div className="col">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="form-select"
                    aria-label="Select Gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  >
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                </div>
              </div>

              <div className="form-check">
                <input
                  id="accept"
                  className="form-check-input"
                  type="checkbox"
                  value={formik.values.accept}
                  onChange={formik.handleChange}

                  // placeholder="Choose Date of Birth"
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
        </form>
      </div>
    </>
  );
};

export default RegisterWithFormik;
