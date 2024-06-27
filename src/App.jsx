import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomLoader from './components/Loader';
import CircleLoader from "react-spinners/CircleLoader";
import Navbar from './components/Navbar';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ContactForm = React.lazy(() => import('./pages/ContactForm'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App text-white bg-gradient-to-br bg-fixed from-green-400 to-blue-950 h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CustomLoader />
        </div>
      ) : (
        <Router>
          <div className="App text-white bg-gradient-to-br bg-fixed from-green-400 to-blue-950 h-screen">
            <Navbar />
            <div className="pt-24 p-4">
              <Suspense fallback={<CircleLoader color="#fff" loading={loading} size={150} />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<ContactForm />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
