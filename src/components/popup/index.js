import React from 'react'
import './popup.css'
import { LOGO } from '../../utils/constant';

const index = () => {
  return (
    <div className="popup-overlay" id="popupOverlay">
      <div className="popup" id="popup">
        <span className="close" id="closePopup">&times;</span>
        <div className="popup-content">
          <img src={LOGO} alt="Logo" />
          <p>The Indian Summit</p>
          <a href="src/Pages/Registration.html">Register Now!</a>
        </div>
      </div>
    </div>
  )
}

export default index