import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpinTheWheel from './pages/SpinTheWheel';


function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading</div>}>
      
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SpinTheWheel" element={<SpinTheWheel />} />
      
    </Routes>
   
    </Suspense>
    </Router>
  );
}

export default App;
