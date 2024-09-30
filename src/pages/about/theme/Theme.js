import React from 'react';
import './theme.css';
import { IMAGE_2, VISION_IMAGE } from '../../../utils/constant';

const Theme = () => {
  return (
    <div className='theme-body'>
      {/* Header Section */}
      <div className="header-section">
        <div className="center_header">
          <div className="header-content">
            <h1>Culture Says Everything ???</h1>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-content">
          <p>
            "Culture is the widening of the mind and of the spirit." — <b>Jawaharlal Nehru</b>
          </p>
          <p>
            Culture deeply influences every part of our lives. It shapes our thoughts, expressions, and traditions.
            <br />
            However, with globalization, our unique culture has been fading, and it's urgent that we address this issue
            to keep our heritage alive.
          </p>
          <p>
            Good leaders play a vital role in preserving and nurturing culture. They have the power to challenge old norms
            and inspire pride in our traditions.
            <br />
            In these changing times, strong leadership is crucial for fostering a culture that brings out the best in everyone
            and ensures lasting success.
          </p>
          <p>
            Understanding culture means recognizing the hidden meanings behind our behaviors and societal changes.
            <br />
            It’s essential to tackle the decline of our cultural identity to maintain the richness and diversity that make us
            unique.
          </p>
          <p>
            Let's focus on preserving our culture to guide our interactions and decisions, ensuring a vibrant future for all.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="content-container">
          <div className="mission-text">
            <h1>Our Mission & Visions</h1>
            <p>
              Act as a torchbearer in a step forward towards revival of the dwindling INDIAN CULTURE and celebrate the UNITY IN DIVERSITY of our culture and reflect our theme “The Culture Says Everything?”
            </p>
            <ul>
              <li style={{ marginBottom: '10px', paddingTop: '10px' }}>
                Encourage PUBLIC SPEAKING and build confidence and empower the stellar youth of our country with RESEARCH SKILLS to contribute to building a stout nation through diplomacy.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Celebrate and revive the INDIAN CULTURE in the new era of globalization, which has led us distant from the roots of our rich cultural heritage.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Upholding sustainable development through GREEN INITIATIVE.
              </li>
            </ul>
          </div>
          <div className="vision-image">
            <img src={VISION_IMAGE} alt="Vision and Mission" />
          </div>
        </div>

        {/* Why Us Section */}
        <div className="section">
          <div className="image">
            <img src={IMAGE_2} alt="Why Us" />
          </div>
          <div className="content">
            <h2>WHY US</h2>
            <ul>
              <li className="line">Biggest conference ever held in North India</li>
              <li className="line">A unique theme which connects us to our own roots</li>
              <li className="line">Engaging Sessions</li>
              <li className="line">Unique Moot Court Committee</li>
              <li className="line">Skill Development</li>
              <li className="line">Comfortable Venue</li>
              <li className="line">Completely Zero Plastic Event</li>
              <li className="line">Interactive activities</li>
              <li className="line">First class Executive Board</li>
              <li className="line">Internship Opportunities</li>
              <li className="line">Chance to meet the finest diplomats, Eminent Political Leaders, Advocates on Record at the Apex Court of the Country, Renowned Environmentalist and UN Diplomats among others</li>
              <li className="line">Exciting Prizes</li>
              <li className="line">Grandeur Cultural Event and a concert by a Celebrated Artist</li>
              <li className="line">And many more awaiting, so what are you waiting for?.... Don’t miss your chance to be inspired, connect, and make a real impact contributing to nation building in a unique manner!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theme;