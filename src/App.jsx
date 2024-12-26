import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Privacy from './pages/Privacy'
import Inspirations from './pages/Inspirations'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  useEffect(() => { if (location.hash === '#target-section' && targetRef.current) { targetRef.current.scrollIntoView({ behavior: 'smooth' }); } }, [location]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/ministries' element={<Ministries /> } />
            <Route path='/sermons' element={<Sermons/> } />
            <Route path='/ministries#main'element={<Ministries/>} />
            <Route path='/ministries#evangelism'element={<Ministries/>} />
            <Route path='/ministries#couples'element={<Ministries/>} />
            <Route path='/ministries#men-fellowship'element={<Ministries/>} />
            <Route path='/ministries#women-fellowship'element={<Ministries/>} />
            <Route path='/ministries#single-parents'element={<Ministries/>} />
            <Route path='/ministries#youths'element={<Ministries/>} />
            <Route path='/ministries#children'element={<Ministries/>} />
            <Route path='/ministries#counselling'element={<Ministries/>} />
            <Route path='/ministries#life-coaching'element={<Ministries/>} />
            <Route path='/ministries#community'element={<Ministries/>} />
            <Route path='/ministries#inspiration'element={<Ministries/>} />
            <Route path='/privacy' element={<Privacy/>}/>
            <Route path='/inspirations' element={<Inspirations />} />
          </Routes>
          
        </main>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;