import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
// import About from '../pages/about/About';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<About />} /> */}
    </Routes>
  );
}


export default AppRouter;