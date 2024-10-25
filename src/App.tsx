import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Catalog from './components/pages/Catalog/Catalog';
import Header from './components/features/Header/Header';
import Footer from './components/features/Footer/Footer';
import './App.css';
import { lamps } from './assets/utils/lamp';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home lamps={lamps} />} />
          <Route path="/catalog" element={<Catalog/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;