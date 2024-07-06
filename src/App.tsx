// Styles
import './App.css';

// Components
import React, { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TopNav from './components/TopNav/topnav';
import { CircularProgress } from '@mui/material';
import { StringConstants } from './utils/constants';

// Pages
const Home = React.lazy(() => import('./pages/Home/home'));
const Games = React.lazy(() => import('./pages/Games/games'));
const Cart = React.lazy(() => import('./pages/Cart/cart'));
const About = React.lazy(() => import('./pages/About/about'));
const SpinTheWheel = React.lazy(() => import('./pages/Games/SpinTheWheel/spinTheWheel'));
const SpankBank = React.lazy(() => import('./pages/Games/SpankBank/spankBank'));
const MemoryLane = React.lazy(() => import('./pages/Games/PictureGallery/pictureGallery'));
const Gallery = React.lazy(() => import('./pages/Games/PictureGallery/galleryView'));
const WhackAMole = React.lazy(() => import('./pages/Games/WhackAMole/whackAMole'));

function App() {
  const location = useLocation();
  const showTopNav = location.pathname === '/home' || location.pathname === '/games' || location.pathname === '/cart' || location.pathname === '/about';

  return (
    <>
      {showTopNav && (
        <div className='top-nav'>
          <TopNav />
        </div>
      )}
      <div className='main'>
        <Suspense fallback={<div className='loading-container'><CircularProgress/></div>}>
          <Routes>
            <Route path={StringConstants.HOME_ROUTE} element={<Home/>}/>
            <Route path={StringConstants.GAMES_ROUTE} element={<Games/>}/>
            <Route path={StringConstants.CART_ROUTE} element={<Cart/>}/>
            <Route path={StringConstants.ABOUT_ROUTE} element={<About/>}/>
            <Route path={StringConstants.SPIN_THE_WHEEL_ROUTE} element={<SpinTheWheel/>}/>
            <Route path={StringConstants.SPANK_BANK_ROUTE} element={<SpankBank/>}/>
            <Route path={StringConstants.PICTURE_GALLERY_ROUTE} element={<MemoryLane/>}/>
            <Route path={StringConstants.GALLERY_VIEW_ROUTE} element={<Gallery />} />
            <Route path={StringConstants.WHACK_A_MOLE_ROUTE} element={<WhackAMole/>}/>
            {/* Default Route */}
            <Route path='/' element={<Navigate to={StringConstants.HOME_ROUTE}/>} />
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
