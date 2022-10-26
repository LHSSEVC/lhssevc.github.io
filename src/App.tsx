import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Gallery from './Pages/Gallery';
import SponsorInfo from './Pages/SponsorInfo';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/sponsorinfo' element={<SponsorInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
