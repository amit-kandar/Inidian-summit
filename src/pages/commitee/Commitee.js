import React from 'react';
import './Commitee.css';  

const Committee = () => {
  return (
    <><div class="container">

          <h1>Committees & Agenda's</h1>

          <div className="grid-container">
              <div className="grid-item">
                  <a href="#">
                      <div className="overlay"></div>
                      <img src="C:\Users\hp\Desktop\Inidian-summit\src\assets\Commitee\lok sabha.jpg" alt=""/>
                          <p>Lok Sabha</p>
                      </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/unw.jpg" alt="UNW"/>
                          <p>United Nations Women</p>
                      </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/galegal1.jpg" alt="GA Legal"/>
                          <p>General Assembly Legal</p>
                    </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/unsc.jpg" alt="United Nations Security Council"/>
                          <p>United Nations Security Council</p>
                      </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/unhrc.jpg" alt="UNHRC"/>
                          <p>United Nations Human rights Council</p>
                      </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/ncw.jpg" alt="NCW"/>
                          <p>National Commission for women</p>
                      </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/mahabharat.jpg" alt="Mahabharat/HCC"/>
                          <p>Historical crisis committe</p>
                      </a>
              </div>
              <div class="grid-item">
                  <a href="#">
                      <div class="overlay"></div>
                      <img src="src/images/Commitee/galegal2.jpg" alt="GA Legal"/>
                          <p>IP</p>
                      </a>
              </div>
          </div>
      </div>
      
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
              </>
  );
}

export default Committee;
