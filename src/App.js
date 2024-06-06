import Dashboard from '../src/components/dashboard/dashboard';
import Navbar from '../src/components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
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
