import Dashboard from '../src/components/dashboard/dashboard';
import Navbar from '../src/components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from '../src/components/entry/Entry';
import React, {useState, useEffect} from 'react';

function App() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {showElement && <Entry />}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/Neon Sign' element={'This is where the routing page will be called'}/>
        </Routes>
      </Router>
      <Dashboard />
    </div>
  );
}

export default App;
