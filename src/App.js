import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import global components
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import History from './pages/History';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Schedule from './pages/Schedule';

import staff from './staff';

// Header and Footer are global components
// Profiles, Contact, Donate, History, Home, and Schedule are pages that need to be tied in with React Router
function App() {
  return (
    <div className="App">
      <Header />
      <Profiles staff={staff} />
      <Contact />
      <Donate />
      <History />
      <Home />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
