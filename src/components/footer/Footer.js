import React from 'react'
// import './footer.css'
import { INSTAGRAM_ICON, LINKEDIN_ICON, WHATSAPP_ICON } from '../../utils/constant'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="item-1">
                    <h1 className="heading" style={{ color: "rgb(255, 255, 255)" }}>Contact us</h1>
                    <a href="tel:+917665999929" style={{ color: "rgb(255, 255, 255)" }}>Phone: +917665999929
                    </a><br />
                    <a href="mailto:info@theindiansummit.com" style={{ color: "rgb(255, 255, 255)" }}>Email:
                        info@theindiansummit.com
                    </a>
                    <br />
                    <div style={{ marginTop: "20px", display: "flex", flexDirection: "row", gap: "10px" }} className="social">
                        <a href="https://www.instagram.com/theindiansummit?igsh=a2IxdHI2dW84MG92" target="_blank" rel="noreferrer"
                            style={{ marginRight: " 10px" }}>
                            <img src={INSTAGRAM_ICON} alt="" width="25" height="25" />
                        </a>
                        <a href="https://www.linkedin.com/company/the-indian-summit/" target="_blank" rel="noreferrer"
                            style={{ marginRight: "10px" }}>
                            <img src={LINKEDIN_ICON} alt="" width="25px" height="25px" />
                        </a>
                        <a href="https://wa.me/917665999929?text=Hello%20I%20have%20a%20query" target="_blank" rel="noreferrer"
                            style={{ marginRight: "10px" }}>
                            <img src={WHATSAPP_ICON} alt="" width="25px" height="25px" />
                        </a>
                    </div>
                </div>
                <div className="item-2">
                    <a href="/register">Register</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer