import React from 'react'
import './profile.css'
import { PROFILE_IMAGE_1, PROFILE_IMAGE_2 } from '../../../utils/constant'

const Profile = () => {
  return (
    <section>
      <div className="header-hero-container">
        <div className="header-hero-overlay"></div>
        <div>
          <h1 className="hero-quote" style={{ fontFamily: 'poppins' }}>
            Meet the Secretaries
          </h1>
        </div>

        {/* Hero Profile */}
        <div className="hero-profile">
          <div className="hero-profile-bg1"></div>
          <div className="hero-profile-bg2"></div>

          {/* Profile 1 */}
          <div className="img-1">
            {/* Option 1: Using imported image */}
            {/* <img src={Profile1} alt="Profile Image 1" /> */}

            {/* Option 2: Using public folder */}
            <img src={PROFILE_IMAGE_1} alt="Profile 1" />

            <h1>Priyansh Bhardwaj</h1>
            <h2>(Founder & Director General)</h2>
            <p>
              Priyansh Bharadwaj, the visionary Founder and Secretary General of The Indian Summit, has been a driving force behind shaping youth leadership and promoting the debating culture across India. With the remarkable achievement of completing 100+ conferences, Priyansh has dedicated his career to empowering young minds by fostering a culture of debate, diplomacy, and collaboration among the next generation.
              <br /><br />
              His commitment to youth development and passion for creating impactful platforms led to the creation of The Indian Summit, a vision that took over 5 years to bring to life. Through his ongoing work, Priyansh continues to inspire and guide students, helping them build the skills necessary to engage in meaningful discussions and tackle global challenges.
            </p>
          </div>

          {/* Profile 2 */}
          <div className="img-1">
            {/* Option 1: Using imported image */}
            {/* <img src={Profile2} alt="Profile Image 2" /> */}

            {/* Option 2: Using public folder */}
            <img src={PROFILE_IMAGE_2} alt="Profile 2" />

            <h1>Arpit Agrawal</h1>
            <h2>(Founder & Secretary-General)</h2>
            <p>
              Arpit Agrawal, the visionary Director General of The Indian Summit, where he brings a wealth of experience in organizing Model United Nations (MUNs) and Youth Parliaments. With numerous roles as an Organizing Committee (OC) member and in the Secretariat, Arpit has successfully led several high-profile youth conferences, most notably as Director General.
              <br /><br />
              His leadership and vision have consistently set new standards for student-led initiatives, fostering environments that encourage debate, diplomacy, and leadership development. Under his guidance, The Indian Summit continues to be a platform where young minds can engage in meaningful dialogue and build their skills for the future.
            </p>
          </div>

          {/* Uncomment and add more profiles as needed */}
          {/* 
        <div className="img-1">
          <img src="images/profile/image3.jpeg" alt="Profile Image 3" />
          <h2>Priyansh Bhardwaj</h2>
          <h2>Founder Secretary General</h2>
          <p></p>
        </div>
        <div className="img-1">
          <img src="images/profile/image4.jpeg" alt="Profile Image 4" />
          <h2>Priyansh Bhardwaj</h2>
          <h2>Founder Secretary General</h2>
        </div>
        <div className="img-1">
          <img src="images/profile/image5.jpeg" alt="Profile Image 5" />
          <h2>Priyansh Bhardwaj</h2>
          <h2>Founder Secretary General</h2>
        </div>
        <div className="img-1">
          <img src="images/profile/image6.jpeg" alt="Profile Image 6" />
          <h2>Priyansh Bhardwaj</h2>
          <h2>Founder Secretary General</h2>
        </div>
        <div className="img-1">
          <img src="images/profile/image7.jpeg" alt="Profile Image 7" />
          <h2>Priyansh Bhardwaj</h2>
          <h2>Founder Secretary General</h2>
        </div>
        */}
        </div>
      </div>
    </section>
  )
}

export default Profile