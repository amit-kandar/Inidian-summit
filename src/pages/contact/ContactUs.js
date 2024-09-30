import React, { useState } from "react";
import "./Contact.css";
import {
  FACEBOOK,
  LINKEDIN,
  MAIL,
  PHONE_ICON,
  TWITEER,
  YOUTUBE,
} from "../../utils/constant";

const ContactUs = () => {
  const [organization, setOrganization] = useState("");
  const [showOtherOrganizationInput, setShowOtherOrganizationInput] =
    useState(false);

  const toggleGroupDropdown = (e) => {
    const selectedValue = e.target.value;
    setOrganization(selectedValue);
    setShowOtherOrganizationInput(selectedValue === "other_organizations");
  };

  return (
    <section
      className="contactus-background flex items-center justify-center text-black"
      style={{ height: "auto" }}
      id="contact-us"
    >
      <div className="lg:flex w-3/4 mx-auto my-8">
        <div className="bg-[#663c21] lg:w-[64%] mx-auto px-6 lg:px-16 rounded-l-lg relative opacity-85">
          {/* Form Header */}
          <h1 className="text-2xl text-white py-6">Send a Message</h1>

          {/* Form Fields */}
          <div className="py-6">
            {/* Row for First Name and Last Name with logo background */}
            <div className="lg:flex relative">
              {/* <div className="logo-background absolute inset-0 opacity-10 "></div> */}
              <div className="w-full lg:w-1/2 px-1 mb-4 z-10">
                <label className="text-white font-light">First Name(PST)</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full mt-2 px-2 py-1 border rounded-lg text-black focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="w-full lg:w-1/2 px-1 mb-4 z-10">
                <label className="text-white font-light">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full mt-2 px-2 py-1 border rounded-lg text-black focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            {/* Row for Phone and Email */}
            <div className="lg:flex relative">
              <div className="absolute inset-0 opacity-10 z-0"></div>
              <div className="w-full lg:w-1/2 px-1 mb-4 z-10">
                <br></br>
                <div className="w-full">
                  <label className="text-white font-light">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full mt-2 px-2 py-1 border rounded-lg text-black focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-1 mb-4 z-10">
                <img src="" alt="" className="mr-3 h-5" />
                <div className="w-full">
                  <label className="text-white font-light">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full mt-2 px-2 py-1 border rounded-lg text-black focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Group or Company Field */}
            <div className="w-full px-1 mb-4 relative z-10">
              <label className="text-white font-light">
                Group or Organization
              </label>
              <select
                id="categorySelect"
                className="w-full mt-2 px-3 py-2 border rounded-lg text-black focus:outline-none focus:border-green-500"
                style={{ color: "#9ca3af" }}
                onChange={toggleGroupDropdown}
              >
                <option value="">Select an option</option>
                <option value="student_delegate" style={{ color: "black" }}>
                  Student / Delegate
                </option>
                <option value="school_college" style={{ color: "black" }}>
                  School / College
                </option>
                <option value="other_organizations" style={{ color: "black" }}>
                  Other Organizations
                </option>
              </select>
            </div>

            {showOtherOrganizationInput && (
              <div
                id="other-organization-input"
                className="w-full px-1 mb-4 relative z-10"
              >
                <label
                  htmlFor="other-organization"
                  className="text-white font-light"
                >
                  Please specify:
                </label>
                <input
                  type="text"
                  id="other-organization"
                  name="other_organization"
                  className="w-full mt-2 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
                />
              </div>
            )}

            {/* Message Field */}
            <div className="w-full px-1 mb-0.5 relative z-10">
              <label className="text-white font-light">
                How can I help you?
              </label>
              <input
                type="text"
                placeholder="Your message"
                className="w-full mt-1 px-2 py-1 border rounded-lg text-black focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="py-8 px-4 flex justify-center items-center relative z-10">
            <button
              className="flex items-center bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded-full"
              style={{ paddingLeft: "25px", paddingRight: "32px" }}
            >
              SUBMIT
            </button>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="w-full lg:w-[36%] bg-gradient-to-b from-[#0F0806] to-[#4F2B06] rounded-r-lg text-white mobile-height opacity-90">
          <div>
            <div className="font-bold pt-12 pb-3 px-4 text-white text-2xl">
              Contact us
            </div>
            <div className="flex items-center pt-12">
              <img src={PHONE_ICON} alt="Phone" className="mr-3 px-6 h-5" />
              <span className="text-lg py-2" style={{ marginLeft: "-13px" }}>
                <a
                  href="tel:+918958836666"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  +91 8958836666
                </a>
              </span>
            </div>
            <div className="flex items-center pt-4">
              <img src={MAIL} alt="Mail" className="mr-1 px-3" />
              <span className="text-lg">info@theindiansummit.com</span>
            </div>

            {/* Social Media Icons Row */}
            <div className="flex items-center pt-12">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FACEBOOK}
                  className="h-[39px] px-4 mr-6"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.X.com" target="_blank" rel="noreferrer">
                <img
                  src={TWITEER}
                  className="h-[39px] px-4 mr-6"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={YOUTUBE}
                  className="h-[39px] px-4 mr-6"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={LINKEDIN}
                  className="h-[39px] px-4 mr-2"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className="orange-gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
