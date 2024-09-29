import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to The Indian Summit</title>
  <!-- Insert site logo -->
  <link rel="shortcut icon" href="../images/Homepage/Logo.png" type="image/x-icon" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
  <link rel="stylesheet" href="../css/styles.css" />
  <script src="https://cdn.tailwindcss.com"></script>
<body>
  <!-- Header Begin -->
  <header id="header">
    <div class="logo">
      <a href="/index.html"><img src="../images/Homepage/Logo.png" alt="logo" /></a>
    </div>
    <nav id="nav">
      <ul>
        <li><a id="active" href="/index.html">Home</a></li>
        <li>
          <a href="../Pages/Committee&Agenda.html">Committees and Agendas
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
          <a href="#">About Us
          </a>
          <i class="fas fa-angle-down"></i>
          <ul id="about">
            <li>
              <a href="../Pages/Introduction.html">Introduction to The Indian Summit</a>
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
    <div id="hamburger">&#9776;</div>
    <div id="cross">&times;</div>
  </header>
  <!-- Header End-->

  <div class="container12">
    <div class="left-side">
      <div class=" flex-grow py-14 xl:px-28 text-xs sm:text-left relative px-4 md:px-10 lg:px-20 textplacement" style="
            color: whitesmoke;
            
            background-color: #191b1b61;
            border-radius: 70px;
            font-family: 'Cinzel', serif;
          ">
        <p class="text-2xl font-bold py-2 md:text-3xl lg:text-xl xl:text-4xl text-center">
          The Indian Summit family welcomes you!

          <br />
          <br />

          <span class="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl text-center ">We extend this amazing
            opportunity with our courageous participants. What are you waiting for?
          </span>
        </p>
        <br />
        <br />
        <p class="text-2xl font-bold py-2 md:text-3xl lg:text-xl xl:text-4xl text-center">Register now!
        </p>
        <p class="text-xl font-bold py-3 md:text-2xl lg:text-lg xl:text-3xl text-center">
          Dates: <span class="font-normal">9-10 November 2024</span>
        </p>
        <p class="text-xl font-bold py-3 md:text-2xl lg:text-lg xl:text-3xl text-center">
          Venue: <span class="font-normal">Jaipur, Rajasthan</span>
        </p>
        <br />
        <br />
        <p class="text-2xl font-bold py-2 md:text-3xl lg:text-xl xl:text-4xl text-center">
          Steps to Register!
        </p>
        <p class="text-2xl font-bold py-2 md:text-xl lg:text-lg underline">Step 1:</p>
        <div
          class="text-xl font-medium p-3 md:text-2xl lg:text-xl xl:text-2xl bg-black bg-opacity-50 rounded-lg mb-4 text-center">
          For UPI Transaction:
          <br />
          <span class=" text-lg  w-full">
            Scan the QR Code given down below.
          </span>
          <img src="../images/QR-TIS.jpg" class=" h-62 md:40 lg:h-96 mx-auto mt-4" />
          <br />

        </div>
        <p class="text-xl text-center font-medium p-3 md:text-2xl lg:text-xl xl:text-2xl">OR</p>
        <p class="text-xl font-medium p-3 md:text-2xl lg:text-xl xl:text-2xl bg-black bg-opacity-50  rounded-lg  ">
          For Bank transfer:
          <br />
          <span class=" text-lg">
            Bank account details:
            <br />
            - Bank name: Malviya Urban Co-operative Bank Ltd<br />
            - Account holder: The Indian Summit <br />
            - Account no.: 40800020311002015<br />
            - IFSC Code: HDFC0CMUCBL<br />
          </span>

        </p>
        <p class="text-2xl font-bold py-2 md:text-xl lg:text-lg mt-3 underline">Step 2:</p>
        <span class="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl"> Proceed with payment <span class=" text-sm">
          (Take screenshot
          of the payment AND take a note of your UPI Reference ID/ Transaction ID)
        </span>
        </span>
        <p class="text-2xl font-bold py-2 md:text-xl lg:text-lg mt-3 underline">Step 3:</p>
        <span class="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl">   Fill the form with the required details
        </span>
        <p class="text-2xl font-bold py-2 md:text-xl lg:text-lg mt-3 underline">Step 4:</p>
        <span class="text-xl font-medium py-7 md:text-2xl lg:text-xl xl:text-2xl">  Click on Apply.
        </span>


      
       
        </ol>
        <p class="mt-14 text-2xl font-bold md:text-2xl lg:text-lg xl:text-4xl">
          Registration Fees:
        </p>
        <p class="text-xl font-bold mt-8 md:text-2xl lg:text-lg xl:text-3xl">
          Delegate Fee:
          <span class="font-normal">INR 3000/-* (excluding accommodation)</span>
        </p>
        <p class="text-xl font-bold mt-9 md:text-2xl lg:text-lg xl:text-3xl">
          <span class="font-normal">INR 6000/-* (including accommodation)</span>
        </p>

      </div>
    </div>
    <div class="right-side">
      <!-- Begin HTML form -->
      <div class="application">
        <form id="registrationForm" method="post">
          <label for="name">Participant's Name:</label>
          <input type="text" id="name" name="fullname" placeholder="Full Name:" required />

          <label for="institution">Institution Name:</label>
          <input type="text" id="institution" name="institution" placeholder="Institution Name" required />

          <label for="contact">Phone No.:</label>
          <input type="tel" id="contact" name="contact" placeholder="123-456-7890" required />

          <label for="parentContact">Optional Phone No.:</label>
          <input type="tel" id="parentContact" name="parentContact" placeholder="123-456-7890" />

          <label for="age">Age:</label>
          <input type="number" id="age" name="age" placeholder="Age" required />

          <label for="email">Mail Id:</label>
          <input type="email" id="email" name="email" placeholder="@gmail.com" required />

          <label for="committee1">Committee Preference-1:</label>
          <select id="committee1" name="committee1" style="color: #9ca3af;" required onchange="changeColor(this)">
            <option value="" disabled selected>Select your committee</option>
            <option value="Lok Sabha" style="color: black;">Lok Sabha</option>
            <option value="Parallel Universe" style="color: black;">Parallel Universe</option>
            <option value="General Assembly Legal" style="color: black;">General Assembly Legal</option>
            <option value="United Nations Security Council" style="color: black;">United Nations Security Council
            </option>
            <option value="United Nations Human Rights Council" style="color: black;">United Nations Human Rights
              Council</option>
            <option value="National Commission for Women / Continues Crisis Committee" style="color: black;">National
              Commission for Women / Continues Crisis Committee</option>
            <option value="Mahabharat / Historical Crisis Committee" style="color: black;">Mahabharat / Historical
              Crisis Committee</option>
            <option value="International Press" style="color: black;">International Press</option>
          </select>

          <label for="committee2">Committee Preference-2:</label>
          <select id="committee2" name="committee2" style="color: #9ca3af;" required onchange="changeColor(this)">
            <option value="" disabled selected>Select your committee</option>
            <option value="Lok Sabha" style="color: black;">Lok Sabha</option>
            <option value="Parallel Universe" style="color: black;">Parallel Universe</option>
            <option value="General Assembly Legal" style="color: black;">General Assembly Legal</option>
            <option value="United Nations Security Council" style="color: black;">United Nations Security Council
            </option>
            <option value="United Nations Human Rights Council" style="color: black;">United Nations Human Rights
              Council</option>
            <option value="National Commission for Women / Continues Crisis Committee" style="color: black;">National
              Commission for Women / Continues Crisis Committee</option>
            <option value="Mahabharat / Historical Crisis Committee" style="color: black;">Mahabharat / Historical
              Crisis Committee</option>
            <option value="International Press" style="color: black;">International Press</option>
          </select>

          <label for="portfolio1">Portfolio Preference-1:</label>
          <input type="text" id="portfolio1" name="portfolio1" placeholder="Portfolio Preference-1" required />

          <label for="portfolio2">Portfolio Preference-2:</label>
          <input type="text" id="portfolio2" name="portfolio2" placeholder="Portfolio Preference-2" required />

          <label for="experience">Prior Mun Experience:</label>
          <input type="text" id="experience" name="experience" placeholder="Prior Mun Experience" required />

          <div class="accommodation-container">
            <label for="accommodation">Accommodation (If Needed): </label>
            <input style="outline: none;" type="checkbox" id="accommodation" name="accommodation"
              onclick="updateResponse()" />
            <span class="response" id="responseText">No</span>
          </div>

          <label for="transactionId">Transaction ID (Mandatory):</label>
          <input type="text" id="transactionId" name="transactionId" placeholder="Transaction Id" required />
            
          <!-- <label for="paymentScreenshot">Screenshot of the payment:</label>
          <input type="file" id="paymentScreenshot" name="paymentScreenshot" accept="image/*" required /> -->
      
          <label for="referBy">Referred by:</label>
          <input type="text" id="referBy" name="referBy" placeholder="Referred by" required />

          <!-- Terms and Conditions Checkbox -->
          <div class="terms-container">
            <input style="outline: none; width: 17px;" type="checkbox" id="terms" name="terms"
              style="display: inline; width: auto" required />
            <span class=" whitespace-nowrap text-sm sm:text-lg">I agree to the
              <a href="#" id="termsLink">terms and conditions</a></span>
          </div>

          <!-- <button id="rzp-button1" ><i class="fas fa-money-bill"></i>Apply</button> -->
          <button type="submit" id="applyButton" class="applybtn" disabled>
            Apply
          </button>
        </form>
      </div>

      <div id="toast"  class="toast p-2 fixed w-full h-full inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-hidden">
        <div class=" bg-white w-full h-44 lg:w-1/2 rounded-xl flex items-center justify-center text-xl font-semibold">
          Registered Successfully!
        </div>
      </div>

      <!-- Modal for Terms and Conditions -->

      <!-- Modal for Terms and Conditions -->
      <div id="termsModal" class="modal">
        <div class="modal-content" style="padding: 20px">
          <!-- <span class="close">&times;</span> -->
          <h2 style="font-weight: bold; font-size: 30px">
            The Indian Summit
          </h2>
          <h3 style="font-weight: 600; font-size: 20px; margin-top: 15px">
            Terms and Conditions
          </h3>
          <p style="margin-top: 10px"><strong>1. Introduction:</strong></p>
          • By registering on your portal, I agree to comply with and be bound by the terms and conditions of The Indian
          Summit.

          <p style="margin-top: 10px"><strong>2. Registration Deadlines:</strong></p>

          <p>• Registration for the Indian Summit is conducted on a first-come, first-served basis. This means that
            spots are limited and allocated to participants in the order they register.</p>
          <p>• The Summit does not guarantee allocation to your first preferred committee. Once a committee reaches its
            maximum capacity, subsequent applicants will be moved to their next preferred committee. This ensures a fair
            and efficient registration process, giving everyone an equal opportunity.</p>
          <p>• Applicants are encouraged to register early to secure their preferred committee.</p>
          <p>• Please note that committee allocations are subject to availability and may change. Registering promptly
            increases your chances of getting your preferred committee.</p>
          <p>• Don't miss out on this opportunity – register now to secure your spot!</p>
          <p>• By registering early, you can ensure a spot in your preferred committee.</p>

          <p style="margin-top: 10px">
            <strong>3. Code of Conduct:</strong>
          </p>
          <p>• The Indian Summit issue one participation certificate per delegate, one time only. TIS does not issue any
            certificates, more than once.
          </p>
          <p>
            • You hereby certify that all information submitted are truthful and accurate. Any falsification of any
            information submitted will terminate their participation in TIS and future TIS activities.
          </p>
          <p style="margin-top: 10px">
            <strong>4. Privacy Policy:</strong>
          </p>
          • By registering, I agree to the terms of your Privacy Policy.

          <p style="margin-top: 10px">
            <strong>5. Use of the Portal:</strong>
          </p>
          <p>
            • I agree to use the portal for lawful purposes only.

          </p>
          <p>
            • I may not engage in any activity that could harm or interfere with the portal’s functionality.

          </p>
          <p style="margin-top: 10px">
            <strong>6. Cancellation and Refund Policy:</strong>
          </p>
          <p>• No Refund and Cancellation.</p>

          <p>• If you cancel your participation in a retreat or event for any reason, you receive no refunds. We cannot
            however compensate you for airfare or travel costs incurred. In the unlikely event that the retreat or event
            is cancelled due to weather, natural disaster or political upheaval, we cannot guarantee a refund.</p>

          <p style="margin-top: 10px">
            <strong>7. Privacy and Intellectual Property:</strong>
          </p>
          <p>• The Indian Summit reserves the right to utilize all the data submitted to The Indian Summit and to
            collect data in the form of photographs or videas during the conference and social events without
            limitations.</p>
          <p>• All participants agree that no data, results, and materials from The Indian Summit 2024 will be
            disseminated by means of publications, reports, conferences, or any other form without permission from The
            Indian Summit of which these data, results, and materials are its exclusive property.</p>
          <p>• The Indian Summit reserves the right to change these terms and conditions at any time without prior
            notice. If any changes are made, the revised terms and conditions shall be posted on the The Indian Summit
            website immediately.</p>
          <p>• Please check the latest information posted herein to inform yourself of any changes</p>

          <p style="margin-top: 10px">
            <strong>8. Limitation of Liability:</strong>
          </p>
          <p>
          <p>• The Indian Summit will not be liable for any damages resulting from the use or inability to use the
            registration portal.</p>
          <p>• We do not guarantee the accuracy or completeness of the information on the portal.</p>

          </p>
          <p style="margin-top: 10px"><strong>9. Changes to Terms and Conditions:</strong></p>
          <p>• We reserve the right to update these terms and conditions at any time. Any changes will be posted on this
            page, and your continued use of the portal constitutes acceptance of the updated terms.
          </p>
          <p style="margin-top: 10px">
            <strong>10. Governing Law:</strong>
          </p>
          <p>
            • These terms and conditions are governed by the laws of India, and any disputes will be resolved in
            accordance with these laws.

          </p>

          <p style="text-align: center; padding: 10px 10px; font-weight: bold;">I hereby certify that all information
            submitted are truthful and accurate And I agree to the terms & condition.</p>
          <button class="close">Close</button>
        </div>
        
        </div>

      </div>
      <!-- End HTML form -->
    </div>
  </div>

  <!-- Footer Begin -->
  <footer class="mt-10">
    <div class="container">
      <div class="item-1">
        <h1 class="heading" style="color: rgb(255, 255, 255)">Contact us</h1>
        <a href="tel:+918958836666" style="color: rgb(255, 255, 255)">Phone: +918958836666</a><br />
        <a href="mailto:info@theindiansummit.com" style="color: rgb(255, 255, 255)">Email: info@theindiansummit.com</a>
        <br />
        <div style="
              margin-top: 20px;
              display: flex;
              flex-direction: row;
              gap: 10px;
            ">
          <a href="https://www.instagram.com/theindiansummit?igsh=a2IxdHI2dW84MG92" target="_blank"
            style="margin-right: 10px">
            <img src="../images/Footer/instagram.png" alt="" width="25" height="25" />
          </a>
          <a href="https://www.linkedin.com/company/the-indian-summit/" target="_blank" style="margin-right: 10px">
            <img src="../images/Footer/linkedin.png" alt="" width="25px" height="25px" />
          </a>
          <a href="https://wa.me/917665999929?text=Hello%20I%20have%20a%20query" target="_blank"
            style="margin-right: 10px">
            <img src="../images/Footer/whatsapp.png" alt="" width="25px" height="25px" />
          </a>
        </div>
      </div>
      <div class="item-2">
        <a href="../Pages/Registration.html">Register</a>
      </div>
    </div>
  </footer>
  <!-- Footer End -->

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
    import {
      getFirestore,
      collection,
      addDoc,
    } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyD2uPHIXx_hwpF3zXR2eNu7jqczvvu8MQY",
      authDomain: "theindiansummit-98ffa.firebaseapp.com",
      projectId: "theindiansummit-98ffa",
      storageBucket: "theindiansummit-98ffa.appspot.com",
      messagingSenderId: "241244760650",
      appId: "1:241244760650:web:d576bad57b3d07f66454b3",
      measurementId: "G-4723RZ1TB6",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function registerUser(userData) {
      try {
        const docRef = await addDoc(collection(db, "eventRegistrations"), {
          name: userData.name,
          institution: userData.institution,
          contact: userData.contact,
          parentContact: userData.parentContact,
          age: userData.age,
          email: userData.email,
          committee1: userData.committee1,
          committee2: userData.committee2,
          portfolio1: userData.portfolio1,
          portfolio2: userData.portfolio2,
          experience: userData.experience,
          accommodation: userData.accommodation,
          transactionId: userData.transactionId,
          referBy: userData.referBy,

        });
        console.log("User registered with ID: ", docRef.id);
        if(docRef.id){
          const toast = document.getElementById("toast");
    toast.className = "toast show p-2 fixed w-full h-full inset-0 z-50 flex items-center bg-black bg-opacity-50 justify-center overflow-hidden";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000); // Toast will disappear after 3 seconds
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const userData = {
        name: document.getElementById("name").value,
        institution: document.getElementById("institution").value,
        contact: document.getElementById("contact").value,
        parentContact: document.getElementById("parentContact").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        committee1: document.getElementById("committee1").value,
        committee2: document.getElementById("committee2").value,
        portfolio1: document.getElementById("portfolio1").value,
        portfolio2: document.getElementById("portfolio2").value,
        experience: document.getElementById("experience").value,
        accommodation: document.getElementById("accommodation").checked,
        transactionId: document.getElementById("transactionId").value,
        referBy: document.getElementById("referBy").value,
        // eventDate: new Date().toISOString(),  // Example event date, you can change it as needed
        // paymentStatus: "pending",  // Update this after successful payment
        // paymentId: null  // Update this after successful payment
      };

      console.log("User data: ", userData);
      await registerUser(userData);
      clearForm();
      // Further actions like redirecting to a thank you page
    });


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
    function updateResponse() {
      const checkbox = document.getElementById("accommodation");
      const responseText = document.getElementById("responseText");
      responseText.style.display = "inline"; // Show the response
      responseText.textContent = checkbox.checked ? "Yes" : "No";
    }

    function clearForm() {
      document.getElementById("registrationForm").reset(); // Reset the form
      document.getElementById("responseText").innerText = "No"; // Reset the response text
    }

    document.addEventListener("DOMContentLoaded", function () {
      const viewElements = document.querySelectorAll(".view");

      function handleScroll() {
        viewElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    // Get the modal
    var modal = document.getElementById("termsModal");

    // Get the link that opens the modal
    var btn = document.getElementById("termsLink");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the link, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    document.getElementById("terms").addEventListener("change", function () {
      document.getElementById("applyButton").disabled = !this.checked;
    });
  </script>
  <script>
    function changeColor(selectElement) {
      selectElement.style.color = 'black';
    }
  </script>
</body>

</html>