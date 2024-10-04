import React, { useState } from "react";
import { useFormik } from "formik";
import registerSchema from "../../schema/registerSchema";
import Error from "../../components/Error";
import axios from 'axios';
import "./register.css";

const Register = () => {
  const [accommodation, setAccommodation] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const initialValues = {
    fullname: "",
    institution: "",
    contact: "",
    parentContact: "",
    age: "",
    email: "",
    committee1: "",
    accommodation: false,
    terms: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);  // Start loading
      setError(null);    // Clear any previous errors
      try {
        const response = await axios.post('http://127.0.0.1:5000/create-payment', {
          amount: values.amount, // Send only the amount field
        });

        if (response.data.payment_url) {
          window.location.href = response.data.payment_url; // Redirect to payment URL on success
        }
      } catch (error) {
        setError('Failed to submit the form. Please try again.'); // Handle failure
      } finally {
        setLoading(false);  // Stop loading
      }
    },
  });

  const updateResponse = () => {
    setAccommodation(!accommodation);
  };

  return (
    <section className="register-section">
      <div className="container12">
        <div style={{ width: "100%" }}>
          <div
            className="flex-grow py-16 xl:px-28 text-xs sm:text-left relative px-4 md:px-10 lg:px-20 textplacement"
            style={{
              color: "whitesmoke",
              backgroundColor: "#191b1b61",
              borderRadius: "70px",
              fontFamily: "'Cinzel', serif",
            }}
          >
            <p className="text-2xl font-bold py-2 md:text-3xl lg:text-xl xl:text-4xl text-center">
              The Indian Summit family welcomes you!
              <br />
              <br />
              <span className="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl text-center">
                We extend this amazing opportunity with our courageous
                participants. What are you waiting for?
              </span>
            </p>
            <br />
            <p className="text-2xl font-bold py-2 md:text-3xl lg:text-xl xl:text-4xl text-center">
              Register now!
            </p>
            <p className="text-xl font-bold py-3 md:text-2xl lg:text-lg xl:text-3xl text-center">
              Dates: <span className="font-normal">9-10 November 2024</span>
            </p>
            <p className="text-xl font-bold py-3 md:text-2xl lg:text-lg xl:text-3xl text-center">
              Venue: <span className="font-normal">Jaipur, Rajasthan</span>
            </p>
            <br />

            <div className="application">
              <form
                onSubmit={formik.handleSubmit}
                className="w-full h-full form-style grid grid-cols-1 sm:grid-cols-2"
                id="registrationForm"
              >
                <div className="form-group">
                  <label
                    htmlFor="fullname"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Participant's Name:
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Full Name"
                    className={`text-dark ${formik.errors.fullname && formik.touched.fullname
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.fullname && formik.touched.fullname && (
                    <Error msg={formik.errors.fullname} />
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="institution"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Institution Name:
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    placeholder="Institution Name"
                    className={`text-dark ${formik.errors.institution && formik.touched.institution
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.institution}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.institution && formik.touched.institution && (
                    <Error msg={formik.errors.institution} />
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="contact"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Phone No.:
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="123-456-7890"
                    className={`text-dark ${formik.errors.contact && formik.touched.contact
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.contact && formik.touched.contact && (
                    <Error msg={formik.errors.contact} />
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="parentContact">Optional Phone No.:</label>
                  <input
                    type="tel"
                    id="parentContact"
                    name="parentContact"
                    placeholder="123-456-7890"
                    className={`text-dark ${formik.errors.parentContact &&
                      formik.touched.parentContact
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.parentContact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.parentContact &&
                    formik.touched.parentContact && (
                      <Error msg={formik.errors.parentContact} />
                    )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="age"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Age:
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    className={`text-dark ${formik.errors.age && formik.touched.age
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.age && formik.touched.age && (
                    <Error msg={formik.errors.age} />
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Mail Id:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="@gmail.com"
                    className={`text-dark ${formik.errors.email && formik.touched.email
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <Error msg={formik.errors.email} />
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="committee1"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Committee Preference-1:
                  </label>
                  <select
                    id="committee1"
                    name="committee1"
                    className={`text-dark ${formik.errors.committee1 && formik.touched.committee1
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.committee1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled>
                      Select your committee
                    </option>
                    <option value="Lok Sabha">Lok Sabha</option>
                    {/* Add more options as needed */}
                  </select>
                  {formik.errors.committee1 && formik.touched.committee1 && (
                    <Error msg={formik.errors.committee1} />
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="amount"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="e.g. 100"
                    className={`text-dark ${formik.errors.contact && formik.touched.contact
                      ? "input-error"
                      : ""
                      }`}
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.amount && formik.touched.amount && (
                    <Error msg={formik.errors.amount} />
                  )}
                </div>

                <div className="accommodation-container col-span-2">
                  <input
                    type="checkbox"
                    id="accommodation"
                    name="accommodation"
                    onChange={(e) => {
                      formik.handleChange(e);
                      updateResponse();
                    }}
                    onBlur={formik.handleBlur}
                    checked={formik.values.accommodation}
                  />
                  <label htmlFor="accommodation">
                    Accommodation (If Needed):
                  </label>
                  <span className="response" id="responseText">
                    {accommodation ? "Yes" : "No"}
                  </span>
                </div>

                <div className="terms-container col-span-2">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.terms}
                  />
                  <span className="text-white fs-4">
                    I agree to the{" "}
                    <a href="/" id="termsLink">
                      terms and conditions
                    </a>
                  </span>
                  {formik.errors.terms && formik.touched.terms && (
                    <Error msg={formik.errors.terms} />
                  )}
                </div>

                <div className="col-span-2">
                  <button
                    type="submit"
                    id="applyButton"
                    className="applybtn fs-4 text-dark"
                  >
                    {loading ? "Processing..." : "Apply"}
                  </button>
                </div>
                {error && <div className="col-span-2 error">{error}</div>}
              </form>
            </div>
          </div>
        </div>

        {toastVisible && (
          <div
            id="toast"
            className="toast p-2 fixed w-full h-full inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-hidden"
          >
            <div
              className="bg-white p-5 rounded-md text-center shadow-md"
              role="alert"
            >
              <strong>Form submitted successfully!</strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Register;
