import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomLoader from './components/Loader';
import CircleLoader from "react-spinners/CircleLoader";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactForm from './pages/ContactForm';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay before setting loading to false
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust delay time as needed

    return () => clearTimeout(timeout);
  }, []); // Only runs once after initial render

  return (
    <div className="App text-white bg-gradient-to-br bg-fixed from-green-400 to-blue-950 h-screen">
      {loading ? (
        <div className="loader flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-950">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Router>
          <div>
            <div className="overflow-y-scroll">
              <Navbar />
            </div>
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
      )}
    </div>
  );
}

export default App;
