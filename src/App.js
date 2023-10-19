import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import StaffCard from './components/StaffCard';
import StaffDisplay from './components/StaffDisplay';
import Header from './components/Header';
import Footer from './components/Footer';

import staff from './staff';

function App() {
  return (
    <div className="App">
      <Header />

      <StaffDisplay staff={staff} />
      <Footer />
    </div>
  );
}

export default App;
