import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloWord from './components/HelloWord';
import Weather from './components/Weather';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HelloWord />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
};

export default AppRoutes;