//Styles
import './App.css';

//Components
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopNav from './components/TopNav/topnav';
import { CircularProgress } from '@mui/material';

//Pages
const Home = React.lazy(() => import('./pages/Home/home'));
const Games = React.lazy(() => import('./pages/Games/games'));
const SpinTheWheel = React.lazy(() => import('./pages/Games/SpinTheWheel/spinTheWheel'));
const SpankBank = React.lazy(() => import('./pages/Games/SpankBank/spankBank'));
const MemoryLane= React.lazy(()=> import('./pages/Games/MemoryLane/MemoryLane'));

function App() {
  return (
    <>
      <div className='top-nav'>
        <TopNav />
      </div>
      <div className='main'>
        <Suspense fallback={<div className="loading-container"><CircularProgress /></div>}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/games/spinTheWheel' element={<SpinTheWheel />} />
            <Route path='/games/spankBank' element={<SpankBank />} />
            <Route path='/games/MemoryLane' element={<MemoryLane/>}/>
            {/* Default Route */}
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </div>
    </>

  );
}

export default App;
