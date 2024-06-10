//Styles
import './App.css';

//Components
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//Pages
const Home = React.lazy(() => import('./pages/Home/home'));
const SpinTheWheel = React.lazy(() => import('./pages/SpinTheWheel/spinTheWheel'));
const SpankBank = React.lazy(() => import('./pages/SpankBank/spankBank'));
const MemoryLane= React.lazy(()=> import('./pages/MemoryLane/MemoryLane'));

function App() {
  return (
      <div className='main'>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/SpinTheWheel' element={<SpinTheWheel/>}/>
          <Route path='/SpankBank' element={<SpankBank />}/>
          <Route path='/MemoryLane' element={<MemoryLane/>}/>
          {/* Default Route */}
          <Route path='/' element={<Navigate to='/Home'/>}>
            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
