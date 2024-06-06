import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpinTheWheel from './pages/SpinTheWheel';
import SpankBank from './pages/SpankBank/SpankBank';


function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading</div>}>
      
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SpinTheWheel" element={<SpinTheWheel />} />
      <Route path="/SpankBank" element={<SpankBank />} />
    </Routes>
   
    </Suspense>
    </Router>
  );
}

export default App;
