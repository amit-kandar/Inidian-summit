import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="container">
        <div class="item-1">
            <h1 class="heading" style="color: rgb(255, 255, 255);">Contact us</h1>
            <a href="tel:+917665999929" style="color: rgb(255, 255, 255);">Phone: +917665999929
            </a><br/>
            <a href="mailto:info@theindiansummit.com" style="color: rgb(255, 255, 255);">Email:
                info@theindiansummit.com
            </a>
            <br/>
            <div style="margin-top: 20px; display: flex; flex-direction: row; gap: 10px;" class="social">
                <a href="https://www.instagram.com/theindiansummit?igsh=a2IxdHI2dW84MG92" target="_blank"
                    style="margin-right: 10px;">
                    <img src="src/images/Footer/instagram.png" alt="" width="25" height="25" />
                </a>
                <a href="https://www.linkedin.com/company/the-indian-summit/" target="_blank"
                    style="margin-right: 10px;">
                    <img src="src/images/Footer/linkedin.png" alt="" width="25px" height="25px" />
                </a>
                <a href="https://wa.me/917665999929?text=Hello%20I%20have%20a%20query" target="_blank"
                    style="margin-right: 10px;">
                    <img src="src/images/Footer/whatsapp.png" alt="" width="25px" height="25px" />
                </a>
            </div>
        </div>
        <div class="item-2">
                <a href="#">Register</a>
        </div>
    </div>
</footer>
  )
}

export default Footer