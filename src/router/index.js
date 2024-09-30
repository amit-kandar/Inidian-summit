import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Committee from '../pages/commitee/Commitee';
import Mrn from '../pages/mrn/Mrn';
import CommitteeDetail from '../components/CommitteeDetail/CommitteeDetail';
import ContactUs from '../pages/contact/ContactUs';
import Introduction from '../pages/about/introduction/Introduction';
import Theme from '../pages/about/theme/Theme';
import Profile from '../pages/about/profile/Profile';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/committee-agenda/" element={<Committee />} />
      <Route path="/committee-agenda/:link" element={<CommitteeDetail />} />
      <Route path="/MRN" element={<Mrn />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about/introduction" element={<Introduction />} />
      <Route path="/about/theme" element={<Theme />} />
      <Route path="/about/profile" element={<Profile />} />
    </Routes>
  );
}


export default AppRouter;