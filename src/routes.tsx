import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Client from './pages/Client';
import Settings from './pages/Settings';
import Start from './pages/Start';

const ApplicationRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente/:id" element={<Client />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;