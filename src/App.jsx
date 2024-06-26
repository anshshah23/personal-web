import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App text-white bg-gradient-to-br bg-fixed from-green-400 to-blue-950 h-screen">
        <Navbar />
        <div className="pt-16 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
