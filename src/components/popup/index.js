import React from 'react'
import './popup.css'
import { LOGO } from '../../utils/constant';

const index = () => {
  return (
    <div class="popup-overlay" id="popupOverlay">
      <div class="popup" id="popup">
        <span class="close" id="closePopup">&times;</span>
        <div class="popup-content">
          <img src={LOGO} alt="Logo" />
          <p>The Indian Summit</p>
          <a href="src/Pages/Registration.html">Register Now!</a>
        </div>
      </div>
    </div>
  )
}

export default index