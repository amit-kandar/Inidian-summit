import React from 'react'

const Footer = () => {
  return (
/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../css/styles.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "cinzel", sans-serif;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
      }

      body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../images/Commitee/unsc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        filter: brightness(20%);
        z-index: -1;
        opacity: 0.9;
      }

      .indivi-heading {
        font-size: 55px;
        color: #ffffff;
        font-weight: 600;
        text-align: center;
        text-shadow: 0 0 10px rgba(252, 28, 28, 0.4),
          0 0 20px rgba(252, 28, 28, 0.4), 0 0 30px rgba(252, 28, 28, 0.4);

        margin: 40px 0;
      }
      .indivi-sub-heading {
        font-weight: 700;
        font-size: 32px;
        text-align: center;
        text-transform: capitalize;
        color: white;
        margin: 0 90px;
      }

      @media (max-width: 480px) {
        .indivi-heading {
          font-size: 35px;
        }
        .indivi-sub-heading {
          font-size: 20px;
        }
      }
    </style>
  </head>*/

  <body>
   
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
           <li>
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
                <li><a href="#">Events</a></li> 
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
    
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
      "
    >
      <!--div
            style="width: 399px; height: 399px; border-radius: 100%; border: 2px solid red; display: flex; justify-content: center; align-items: center;">
            <img src="../images/Commitee/unsc.jpg" alt=""
                style="width: 397px; height: 397px; border-radius: 100%; object-fit: cover;">
        </div--> 
      <h1 class="indivi-heading" style="text-transform: capitalize">
        UNSC - United nations security council
      </h1>
      <h3
        style="
          color: white;
          font-weight: 700;
          font-size: 30px;
          text-decoration: underline;
          font-family: 'Copperplate Gothic Light', sans-serif;
        "
      >
        Agenda
      </h3>
      <p class="indivi-sub-heading">
        deliberation On Non state actors and proxy wars with special emphasis on
        imagining the influence of non state actors in libya.
      </p>

      <div
        style="
          margin-top: 40px;
          margin-bottom: 40px;
          display: flex;
          flex-direction: row;
          gap: 36px;
        "
      >
        <a
          href="https://www.instagram.com/theindiansummit?igsh=a2IxdHI2dW84MG92"
          target="_blank"
        >
          <img
            src="../images/Footer/instagram.png"
            alt=""
            width="45px"
            height="45px"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/the-indian-summit/"
          target="_blank"
        >
          <img
            src="../images/Footer/linkedin.png"
            alt=""
            width="45px"
            height="45px"
          />
        </a>
        <a
          href="https://wa.me/917665999929?text=Hello%20I%20have%20a%20query"
          target="_blank"
        >
          <img
            src="../images/Footer/whatsapp.png"
            alt=""
            width="45px"
            height="45px"
          />
        </a>
        <a href="mailto:info@theindiansummit.com" target="_blank">
          <img
            src="../images/icons/mail.png"
            alt=""
            width="45px"
            height="45px"
          />
        </a>
      </div>
    </div>
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
 /* </body>
</html> */
    );
}