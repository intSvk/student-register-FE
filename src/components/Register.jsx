import React, { useEffect } from "react";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "",
    accept: false,
  });

  const [user, setUser] = useState({});

  function handleSubmit(e) {
    console.log("I am getting called");
    e.preventDefault();
    setUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      email: formData.email,
      dob: formData.dob,
      gender: formData.gender,
    });
  }
  // useEffect(()=>{
  console.log(user);
  // },[user])

  return (
    <>
      <div className="container mt-5">
        <h2>Register Yourself</h2>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                id="firstName"
                className="form-control"
                type="text"
                value={formData.firstName}
                // placeholder="Enter First Name"
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, firstName: e.target.value };
                  })
                }
              ></input>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                id="lastName"
                className="form-control"
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, lastName: e.target.value };
                  })
                }
                // placeholder="Enter Last Name"
              ></input>
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                id="mobile"
                className="form-control"
                type="text"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, mobile: e.target.value };
                  })
                }
                // placeholder="Enter Mobile Number"
              ></input>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }

                // placeholder="Enter Email"
              ></input>

              <div className="row">
                <div className="col">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    className="form-control"
                    type="date"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, dob: e.target.value };
                      })
                    }

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
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, gender: e.target.value };
                      })
                    }
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                </div>
              </div>

              <div class="form-check">
                <input
                  id="accept"
                  className="form-check-input"
                  type="checkbox"
                  value={formData.accept}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, accept: e.target.value };
                    })
                  }

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

export default Register;
