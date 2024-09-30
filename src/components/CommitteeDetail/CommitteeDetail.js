// CommitteeDetail.js
import React from 'react';
import './commiteeDetail.css'
import { useParams } from 'react-router-dom';
import { committees } from '../../utils/data';
import { INSTAGRAM_ICON, LINKEDIN_ICON, MAIL_ICON, WHATSAPP_ICON } from '../../utils/constant';

const CommitteeDetail = () => {
  const { link } = useParams();
  const committee = committees.find((c) => c.link === link);

  if (!committee) return <div>Committee not found</div>;

  return (
    <div style={{ position: 'relative', padding: '10rem 0' }}>
      {/* Background Overlay */}
      <div
        className="background-overlay"
        style={{
          backgroundImage: `url(${committee.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(20%)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '60px',
        }}
      >
        <h1 className="indivi-heading">{committee.name}</h1>
        <h3
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: '30px',
            textDecoration: 'underline',
            fontFamily: 'Copperplate Gothic Light, sans-serif',
          }}
        >
          Agenda
        </h3>
        <p className="indivi-sub-heading">{committee.agenda}</p>

        <div
          style={{
            marginTop: '40px',
            marginBottom: '40px',
            display: 'flex',
            flexDirection: 'row',
            gap: '36px',
          }}
        >
          <a href="https://www.instagram.com/theindiansummit?igsh=a2IxdHI2dW84MG92" target="_blank" rel="noreferrer">
            <img src={INSTAGRAM_ICON} alt="Instagram" width="45px" height="45px" />
          </a>
          <a href="https://www.linkedin.com/company/the-indian-summit/" target="_blank" rel="noreferrer">
            <img src={LINKEDIN_ICON} alt="LinkedIn" width="45px" height="45px" />
          </a>
          <a href="https://wa.me/917665999929?text=Hello%20I%20have%20a%20query" target="_blank" rel="noreferrer">
            <img src={WHATSAPP_ICON} alt="WhatsApp" width="45px" height="45px" />
          </a>
          <a href="mailto:info@theindiansummit.com" target="_blank" rel="noreferrer">
            <img src={MAIL_ICON} alt="Mail" width="45px" height="45px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommitteeDetail;