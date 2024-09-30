import React, { useState } from "react";
import "./register.css";
import { QR_CODE } from "../../utils/constant";

const Register = () => {
  const [accommodation, setAccommodation] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const updateResponse = () => {
    setAccommodation(!accommodation);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Hide toast after 3 seconds
  };

  const closeModal = () => {
    document.getElementById("termsModal").style.display = "none";
  };
  return (
    <section className="register-section">
      <div className="container12">
        <div className="left-side">
          <div
            className="flex-grow py-14 xl:px-28 text-xs sm:text-left relative px-4 md:px-10 lg:px-20 textplacement"
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
            <p className="text-2xl font-bold py-2 md:text-3xl lg:text-xl xl:text-4xl text-center">
              Steps to Register!
            </p>
            <p className="text-2xl font-bold py-2 md:text-xl lg:text-lg underline">
              Step 1:
            </p>
            <div className="text-xl font-medium p-3 md:text-2xl lg:text-xl xl:text-2xl bg-black bg-opacity-50 rounded-lg mb-4 text-center">
              For UPI Transaction:
              <br />
              <span className="text-lg w-full">
                Scan the QR Code given down below.
              </span>
              <img
                src={QR_CODE}
                className="h-62 md:40 lg:h-96 mx-auto mt-4"
                alt="QR Code"
              />
              <br />
            </div>
            <p className="text-xl text-center font-medium p-3 md:text-2xl lg:text-xl xl:text-2xl">
              OR
            </p>
            <p className="text-xl font-medium p-3 md:text-2xl lg:text-xl xl:text-2xl bg-black bg-opacity-50 rounded-lg">
              For Bank transfer:
              <br />
              <span className="text-lg">
                Bank account details:
                <br />
                - Bank name: Malviya Urban Co-operative Bank Ltd
                <br />
                - Account holder: The Indian Summit <br />
                - Account no.: 40800020311002015
                <br />- IFSC Code: HDFC0CMUCBL
              </span>
            </p>
            <p className="text-2xl font-bold py-2 md:text-xl lg:text-lg mt-3 underline">
              Step 2:
            </p>
            <span className="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl">
              Proceed with payment{" "}
              <span className="text-sm">
                (Take screenshot of the payment AND take a note of your UPI
                Reference ID/Transaction ID)
              </span>
            </span>
            <p className="text-2xl font-bold py-2 md:text-xl lg:text-lg mt-3 underline">
              Step 3:
            </p>
            <span className="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl">
              Fill the form with the required details
            </span>
            <p className="text-2xl font-bold py-2 md:text-xl lg:text-lg mt-3 underline">
              Step 4:
            </p>
            <span className="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl">
              Click on Apply.
            </span>
          </div>
        </div>
        <div className="right-side">
          <div className="application">
            <form
              id="registrationForm"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <label htmlFor="name">Participant's Name:</label>
              <input
                type="text"
                id="name"
                name="fullname"
                placeholder="Full Name:"
                required
              />

              <label htmlFor="institution">Institution Name:</label>
              <input
                type="text"
                id="institution"
                name="institution"
                placeholder="Institution Name"
                required
              />

              <label htmlFor="contact">Phone No.:</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="123-456-7890"
                required
              />

              <label htmlFor="parentContact">Optional Phone No.:</label>
              <input
                type="tel"
                id="parentContact"
                name="parentContact"
                placeholder="123-456-7890"
              />

              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                required
              />

              <label htmlFor="email">Mail Id:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="@gmail.com"
                required
              />

              <label htmlFor="committee1">Committee Preference-1:</label>
              <select id="committee1" name="committee1" required>
                <option value="" disabled selected>
                  Select your committee
                </option>
                <option value="Lok Sabha">Lok Sabha</option>
                {/* Add other options here */}
              </select>

              {/* Other input fields */}
              <div className="accommodation-container">
                <label htmlFor="accommodation">
                  Accommodation (If Needed):
                </label>
                <input
                  type="checkbox"
                  id="accommodation"
                  name="accommodation"
                  onClick={updateResponse}
                />
                <span className="response" id="responseText">
                  {accommodation ? "Yes" : "No"}
                </span>
              </div>

              {/* Other inputs... */}

              <div className="terms-container">
                <input type="checkbox" id="terms" name="terms" required />
                <span>
                  I agree to the{" "}
                  <a href="/" id="termsLink">
                    terms and conditions
                  </a>
                </span>
              </div>

              <button
                type="submit"
                id="applyButton"
                className="applybtn"
                disabled={!accommodation}
              >
                Apply
              </button>
            </form>
          </div>

          {toastVisible && (
            <div
              id="toast"
              className="toast p-2 fixed w-full h-full inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-hidden"
            >
              <div className="bg-white w-full h-44 lg:w-1/2 rounded-xl flex items-center justify-center text-xl font-semibold">
                Registered Successfully!
              </div>
            </div>
          )}

          <div id="termsModal" className="modal">
            <div className="modal-content" style={{ padding: "20px" }}>
              <h2 style={{ fontWeight: "bold", fontSize: "30px" }}>
                The Indian Summit
              </h2>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginTop: "15px",
                }}
              >
                Terms and Conditions
              </h3>
              {/* Terms and conditions text here */}
              <button onClick={closeModal} className="close">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
