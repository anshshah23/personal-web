import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomLoader3 from './components/Loaders/loader3/CustomLoader3';
import Navbar from './components/Navbar';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ContactForm = React.lazy(() => import('./pages/ContactForm'));
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

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
            <Suspense fallback={<div className='flex cursor-none justify-center items-center'><CustomLoader3 color="#fff" loading={true} size={150} /></div>}>
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
