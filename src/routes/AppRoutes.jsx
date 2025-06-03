// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import HallOfFame from '../pages/HallOfFame';
import Betrayers from '../pages/Betrayers/Betrayers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/betrayers" element={<Betrayers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;