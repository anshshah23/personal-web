import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLoader3 from './components/Loaders/loader3/CustomLoader3';
import Navbar from './components/Navbar';
import './App.css';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ContactForm = React.lazy(() => import('./pages/ContactForm'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App text-white bg-gradient-to-br bg-fixed from-green-400 to-blue-950 h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CustomLoader3 />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="pt-24 p-4">
            <Suspense fallback={ <div className='text-transparent'>Loading..</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactForm />} />
              </Routes>
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
