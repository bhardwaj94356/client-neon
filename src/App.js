import Dashboard from '../src/components/dashboard/dashboard'
import Navbar from '../src/components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Entry from '../src/components/entry/Entry'
import React, { useState, useEffect, useRef } from 'react'
import Customize from './components/customize/Customize'
import CustomerDetails from './components/customerDetails/CustomerDetails'

function App() {
  const [showElement, setShowElement] = useState(false);
  const ifRenderedBefore = useRef(true);

  useEffect(() => {
    const hasBeenShown = localStorage.getItem('entryShown') === 'true';

    if (!hasBeenShown) {
      setShowElement(true);
      const timer = setTimeout(() => {
        localStorage.setItem('entryShown', 'true');
        setShowElement(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if(!ifRenderedBefore.current){
      const handleWindowClose = () => {
        localStorage.setItem('entryShown', 'false');
      };
      window.addEventListener('beforeunload', handleWindowClose);
  
      return () => {
        window.removeEventListener('beforeunload', handleWindowClose);
      };
    }
  }, []);

  return (
    <div className="App">
      {showElement && <Entry />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/customize' element={<Customize />} />
        <Route path='/customerDetails' element={<CustomerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
