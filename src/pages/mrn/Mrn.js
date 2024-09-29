import React from 'react';
import './Mrn.css';

const Mrn = () => {
  return (
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to The Indian Summit</title>
    <!-- Insert site logo -->
    <link
      rel="shortcut icon"
      href="../images/Homepage/Logo.png"
      type="image/x-icon"
    />
    <!-- Insert site stylesheet -->
    <link rel="stylesheet" href="../css/styles.css" />
    <!-- Insert Countdown Link -->
    <script src="https://cdn.logwork.com/widget/countdown.js"></script>
    <!-- Insert Whatsapp link-->
    <script
      src="https://kit.fontawesome.com/dbd1480747.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://static.elfsight.com/platform/platform.js"
      data-use-service-core
      defer
    ></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
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
          <a href="../Pages/Committee&Agenda.html">Committees and Agendas </a>
        </li>
        <!-- <li>
                  <a href="#">Our Organisation
                      <i class='fas fa-angle-down'></i>
                  </a>
                  <ul id="Our_Organisation">
                      <li><a href="#">Secretariat</a></li>
                      <li><a href="#">Memories</a></li>
                      <li><a href="../Pages/MRN.html">Mahila Sashaktikaran Avam Rastra Nirmarn</a></li>
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

  <div class="container" style="width: auto;">
    <div class="content">
      <div class="header-with-logo">
        <img
          src="../images/Intro & Theme/Mrn logo.png"
          alt="MRN Logo"
          class="logo-img"
        />
        <h1>MAHILA SASHAKTIKARAN AWAM RASTRA NIRMAN</h1>
      </div>
      <p>
        Founded in 2007, the MRN Educational Institute is a leading non-profit
        organization dedicated to transforming rural and urban India. It
        envisionsa developed India and spreads awareness about women's
        empowerment and child development,addressing domestic and professional
        issues. It provides free legal aid to rape and acid attack
        victims,with plans to extend this support to all victims in the
        future.The Foundation's initiatives have significantly impacted
        vulnerable populations, advocating for their rights and well being.
        Through its diverse programs, MRN equips individuals with essential
        skills for self-sufficiency and sustainable growth, enabling rural
        citizens to contribute to national progress. With a mission to
        eliminate poverty, romote vocational training, support youth, and
        empower women, the Foundation aids economically disadvantaged
        communities.
      </p>
    </div>
    <div class="sidebar">
      <img
        src="../images/Commitee/picture 1.jpg"
        alt="Image 1"
        class="sidebar-img"
      />
      <img
        src="../images/Commitee/picture 2.jpg"
        alt="Image 2"
        class="sidebar-img"
      />
      <img
        src="../images/Commitee/picture 3.jpg"
        alt="Image 3"
        class="sidebar-img"
      />
    </div>
  </div>

  <!-- Footar Begin -->
  <footer>
    <div class="container">
      <div class="item-1">
        <h1 class="heading" style="color: rgb(255, 255, 255)">Contact us</h1>
        <a href="tel:+918958836666" style="color: rgb(255, 255, 255)"
          >Phone: +918958836666 </a
        ><br />
        <a
          href="mailto:info@theindiansummit.com"
          style="color: rgb(255, 255, 255)"
          >Email: info@theindiansummit.com
        </a>
        <br />
        <div
          style="
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            gap: 10px;
          "
        >
          <a
            href="https://www.instagram.com/theindiansummit?igsh=a2IxdHI2dW84MG92"
            target="_blank"
            style="margin-right: 10px"
          >
            <img
              src="../images/Footer/instagram.png"
              alt=""
              width="25"
              height="25"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/the-indian-summit/"
            target="_blank"
            style="margin-right: 10px"
          >
            <img
              src="../images/Footer/linkedin.png"
              alt=""
              width="25px"
              height="25px"
            />
          </a>
          <a
            href="https://wa.me/917665999929?text=Hello%20I%20have%20a%20query"
            target="_blank"
            style="margin-right: 10px"
          >
            <img
              src="../images/Footer/whatsapp.png"
              alt=""
              width="25px"
              height="25px"
            />
          </a>
        </div>
      </div>
      <div class="item-2">
        <a href="../Pages/Registration.html">Register</a>
      </div>
    </div>
  </footer>
  <!-- Footer End -->

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
</body>
</html>
  );
}