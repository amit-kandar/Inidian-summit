import React from 'react'
// import './Navbar.css'
import { LOGO } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="header">
      <div class="logo">
        <Link to="/"><img src={LOGO} alt="logo" /></Link>
      </div>
      <nav id="nav">
        <ul>
          <li>
            <Link id="active" to="/">Home</Link>
          </li>
          <li>
            <Link to="/committee-agenda">Committees and Agendas</Link>
          </li>
          {/* <li>
            <a href="#">Our Organisation
              <i class='fas fa-angle-down'></i>
            </a>
            <ul id="Our_Organisation">
              <li><a href="#">Secretariat</a></li>
              <li><a href="#">Memories</a></li>
              <li><a href="src/Pages/MRN.html">Mahila Sashaktikaran Avam Rastra Nirmarn</a></li>
            </ul>
          </li>
          <li><a href="#">Collabrations and Sponsors </a></li>
          <li><a href="#">Events</a></li> */}
          <li>
            <a href="src/Pages/MRN.html">Mahila Sashaktikaran Avam Rastra Nirmarn</a>
          </li>
          <li>
            <a href="/about-us">About Us
              <i class='fas fa-angle-down'></i>
            </a>
            <ul id="about">
              <li><a href="src/Pages/Introduction.html">Introduction to The Indian Summit</a></li>
              <li><a href="src/Pages/Theme.html">Theme of The Indian Summit 24</a></li>
              <li><a href="src/Pages/Profile.html">Meet the Secretariat</a></li>
            </ul>
          </li>
          <li><a href="schedule">Schedule</a></li>
          <li><a href="src/Pages/Contact Us.html">Contact Us</a></li>

        </ul>
      </nav>
      <a href="src/Pages/Registration.html">
        <button id="Register_button">Register Now</button>
      </a>
      <div id="hamburger">&#9776;</div>
      <div id="cross">&times;</div>
    </header>
  )
}

export default Navbar