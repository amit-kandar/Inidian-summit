import React from 'react';
import './About.css';

const About = () => {
  return (
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to The Indian Summit</title>
    
    <link
      rel="shortcut icon"
      href="../images/Homepage/Logo.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="../css/styles.css" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="flex flex-col min-h-screen">
    <!-- Header Begin -->
    <header id="header">
      <div class="logo">
        <a href="../../index.html"
          ><img src="../images/Homepage/Logo.png" alt="logo"
        /></a>
      </div>
      <nav id="nav">
        <ul>
          <li><a id="active" href="../../index.html">Home</a></li>
          <li>
            <a href="../Pages/Committee&Agenda.html"
              >Committees and Agendas
              <i class="fas fa-angle-down"></i>
            </a>
          </li>
          <!-- <li>
                  <a href="#">Our Organisation
                      <i class='fas fa-angle-down'></i>
                  </a>
                  <ul id="Our_Organisation">
                      <li><a href="#">Secretariat</a></li>
                      <li><a href="#">Memories</a></li>
                      <li><a href="#">Mahila Sashaktikaran Avam Rastra Nirmarn</a></li>
                  </ul>
              </li>
              <li><a href="#">Collabrations and Sponsors </a></li>
              <li><a href="#">Events</a></li> -->
              <li><a href="../Pages/MRN.html">Mahila Sashaktikaran Avam Rastra Nirmarn</a></li>
          <li>
            <a href="#"
              >About Us
              <i class="fas fa-angle-down"></i>
            </a>
            <ul id="about">
              <li>
                <a href="../Pages/Introduction.html"
                  >Introduction to The Indian Summit</a
                >
              </li>
              <li>
                <a href="../Pages/Theme.html">Theme of The Indian Summit 24</a>
              </li>
              <li><a href="../Pages/Profile.html">Meet the Secretariat</a></li>
            </ul>
          </li>
          <!-- <li><a href="#">Schedule</a></li> -->
          <li><a href="../Pages/Contact Us.html">Contact Us</a></li>
        </ul>
      </nav>
      <a href="../Pages/Registration.html">
        <button id="Register_button">Register Now</button>
      </a>
      <div id="hamburger">&#9776;</div>
      <div id="cross">&times;</div>
    </header>
    <!-- Header End-->

    <header
      class="contactus-background flex items-center justify-center text-black"
      style="height: auto"
    >
      <div class="lg:flex w-3/4 mx-auto my-8">
          <div
                  class="bg-[#663c21] lg:w-[64%] mx-auto px-6 lg:px-16 rounded-l-lg relative"
                >
          <!-- Form Header -->
          <h1 class="text-2xl text-white py-6">Send a Message</h1>

          <!-- Form Fields -->
          <div class="py-6">
            <!-- Row for First Name and Last Name with logo background -->
            <div class="lg:flex relative">
              <div
                class="logo-background absolute inset-0 opacity-10 "
              ></div>
              <div class="w-full lg:w-1/2 px-1 mb-4 z-10">
                <label class="text-white font-light">First Name(PST)</label>
                <input
                  type="text"
                  placeholder="First Name"
                  class="w-full mt-2 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
                />
              </div>
              <div class="w-full lg:w-1/2 px-1 mb-4 z-10">
                <label class="text-white font-light">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="w-full mt-2 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
            
            <!-- Row for Phone and Email -->
            <div class="lg:flex relative">
              <div
                class="absolute inset-0 opacity-10 z-0"
              ></div>
              <div class="w-full lg:w-1/2 px-1 mb-4 z-10">
                <img
                  src="../images/Contact Us/phone.png"
                  alt=""
                  class="mr-3 h-5"
                />
                <div class="w-full">
                  <label class="text-white font-light">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    class="w-full mt-2 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-1 mb-4 z-10">
                <img src="" alt="" class="mr-3 h-5" />
                <div class="w-full">
                  <label class="text-white font-light">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    class="w-full mt-2 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            <!-- Group or Company Field -->
            <div class="w-full px-1 mb-4 relative z-10">
              <label class="text-white font-light"
                >Group or Organization</label
              >
              <select
                id="categorySelect"
                class="w-full mt-2 px-3 py-2 border rounded-lg text-white focus:outline-none focus:border-green-500"
                style="color: #9ca3af"
                onchange="toggleGroupDropdown()"
              >
                <option value="">Select an option</option>
                <option value="student_delegate" style="color: black">
                  Student / Delegate
                </option>
                <option value="school_college" style="color: black">
                  School / College
                </option>
                <option value="other_organizations" style="color: black">
                  Other Organizations
                </option>
              </select>
            </div>
            <div id="other-organization-input" class="hidden">
              <label for="other-organization" class="text-white font-light"
                >Please specify:</label
              >
              <input
                type="text"
                id="other-organization"
                name="other_organization"
                class="w-full mt-2 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <!-- Message Field -->
            <div class="w-full px-1 mb-0.5 relative z-10">
              <label class="text-white font-light"
                >How can I help you?</label
              >
              <input
                type="text"
                placeholder="Your message"
                class="w-full mt-1 px-2 py-1 border rounded-lg text-white focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div class="py-8 px-4 flex justify-center items-center relative z-10">
            <button
              class="flex items-center bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded-full"
              style="padding-left: 25px; padding-right: 32px"
            >
              <img
                src="../images/Contact Us/lucide_send.png"
                class="px-1 mr-1"
                alt=""
              />
              SUBMIT
            </button>
          </div>
        </div>

        <!-- Contact Information Section -->
        <div
          class="w-full lg:w-[36%] bg-gradient-to-b from-[#0F0806] to-[#4F2B06] rounded-r-lg text-white mobile-height"
        >
          <div>
            <div class="font-bold pt-12 pb-3 px-4 text-white text-2xl">
              Contact us
            </div>
            <div class="flex items-center pt-12">
              <img
                src="./../images/Contact Us/phone.png"
                alt=""
                class="mr-3 px-6 h-5"
              />
              <span class="text-lg py-2" style="margin-left: -13px"
                ><a href="tel:+918958836666" style="color: rgb(255, 255, 255)"
                >+91 8958836666 </a
              ></span
              >
            </div>
            <div class="flex items-center pt-4">
              <img
                src="../images/Contact Us/mail.jpg"
                alt=""
                class="mr-1 px-3"
              />
              <span class="text12-lg">info@theindiansummit.com</span>
            </div>
            <!-- Social Media Icons Row -->
            <div class="flex items-center pt-12">
              <a href="https://www.facebook.com" target="_blank"
                ><img
                  src="../images/Contact Us/ic--baseline-facebook.png"
                  class="h-[39px] px-4 mr-6"
                  alt=""
              /></a>
              <a href="https://www.X.com" target="_blank"
                ><img
                  src="../images/Contact Us/twiteer.png"
                  class="h-[39px] px-4 mr-6"
                  alt=""
              /></a>
              <a href="https://www.youtube.com" target="_blank"
                ><img
                  src="../images/Contact Us/entypo-social_youtube-with-circle.png"
                  class="h-[39px] px-4 mr-6"
                  alt=""
              /></a>
              <a href="https://www.linkedin.com" target="_blank"
                ><img
                  src="../images/Contact Us/entypo-social_linkedin-with-circle.png"
                  class="h-[39px] px-4 mr-2"
                  alt=""
              /></a>
            </div>
          </div>
          <div class="orange-gradient"></div>
        </div>
      </div>
    </header>
    <script>
      function toggleGroupDropdown() {
        var categorySelect = document.getElementById("categorySelect");
        var groupDropdown = document.getElementById("groupDropdown");
        if (categorySelect.value) {
          groupDropdown.style.display = "block";
        } else {
          groupDropdown.style.display = "none";
        }
      }
      function toggleGroupDropdown() {
        var selectElement = document.getElementById("categorySelect");
        var otherOrgInput = document.getElementById("other-organization-input");
        if (selectElement.value === "other_organizations") {
          otherOrgInput.classList.remove("hidden");
        } else {
          otherOrgInput.classList.add("hidden");
        }
      }
    </script>
    <script>
      let header = document.getElementById("header");
      let nav = document.getElementById("nav");
      let ham = document.getElementById("hamburger");
      let cross = document.getElementById("cross");

      ham.addEventListener("click", () => {
        ham.style.display = "none";
        cross.style.display = "block";
        header.style.backgroundColor = "black";
        if (nav.classList != "show") {
          nav.style.zIndex = "9999";
          nav.classList.add("show");
        }
      });

      cross.addEventListener("click", () => {
        ham.style.display = "block";
        cross.style.display = "none";
        header.style.backgroundColor = "transparent";
        if (nav.classList == "show") {
          nav.classList.remove("show");
        }
      });
    </script>
    <script>
      document
        .getElementById("categorySelect")
        .addEventListener("change", function () {
          this.style.color = "black";
        });
    </script>
  </body>
</html>
  );
}