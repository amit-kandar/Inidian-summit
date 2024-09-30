import React from 'react';
import './mrn.css';
import { COMMITEE1, COMMITEE2, COMMITEE3, MRN_LOGO } from '../../utils/constant';

const Mrn = () => {
  return (
    <section className='mrn-section'>
      <div className="container" style={{ width: 'auto' }}>
        <div className="content">
          <div className="header-with-logo">
            <img
              src={MRN_LOGO}
              alt="MRN Logo"
              className="logo-img"
            />
            <h1>MAHILA SASHAKTIKARAN AWAM RASTRA NIRMAN</h1>
          </div>
          <p>
            Founded in 2007, the MRN Educational Institute is a leading non-profit
            organization dedicated to transforming rural and urban India. It envisions
            a developed India and spreads awareness about women's empowerment and child
            development, addressing domestic and professional issues. It provides free
            legal aid to rape and acid attack victims, with plans to extend this support
            to all victims in the future. The Foundation's initiatives have significantly
            impacted vulnerable populations, advocating for their rights and well-being.
            Through its diverse programs, MRN equips individuals with essential skills for
            self-sufficiency and sustainable growth, enabling rural citizens to contribute
            to national progress. With a mission to eliminate poverty, promote vocational
            training, support youth, and empower women, the Foundation aids economically
            disadvantaged communities.
          </p>
        </div>
        <div className="sidebar">
          <img
            src={COMMITEE1}
            alt="commitee1"
            className="sidebar-img"
          />
          <img
            src={COMMITEE2}
            alt="commitee2"
            className="sidebar-img"
          />
          <img
            src={COMMITEE3}
            alt="commitee3"
            className="sidebar-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Mrn;