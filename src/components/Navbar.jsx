import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../components/styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`p-3 w-full top-0 z-1000 bg-black bg-opacity-70 shadow-lg ${isVisible ? '' : 'hidden'}`}>
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="relative z-50">
          <Logo />
        </div>
        <div className="md:hidden relative z-50" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'} ease-in-out duration-1000`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`M${isOpen ? '6 18L18 6M6 6l12 12' : '4 6h16M4 12h16m-7 6h7'}`}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? 'fixed inset-y-0 right-0 w-full flex flex-col items-center justify-center bg-slate-900 z-80 transition-transform duration-1000 ease-in-out' : 'hidden md:flex md:flex-row md:justify-between md:items-center md:space-x-10'}`}
        >
          <div>
            <ul className="flex flex-col font-bold md:flex-row justify-center items-center md:space-x-10">
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/" className="hover:text-purple-400 text-xl md:text-xl text-white">
                  Home
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/about" className="hover:text-purple-400 text-xl md:text-xl text-white">
                  About
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/projects" className="hover:text-purple-400 text-xl md:text-xl text-white">
                  Projects
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative md:mr-10" onClick={() => setIsOpen(false)}>
                <Link to="/contact" className="hover:text-purple-400 text-xl md:text-xl text-white">
                  Contact
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 duration-1000"></span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-center md:space-x-10">
              <li className="my-2 md:my-0 group relative">
                <a href="https://github.com/anshshah23" target='_blank' rel='noopener noreferrer'>
                  <button className="nav-btn">
                    <svg width="25" height="25" fill="#000000" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.00143,10.00143,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </button>
                </a>
              </li>
              <li className="my-2 md:my-0 group relative">
                <a href="https://linkedin.com/in/anshshah23" target='_blank' rel='noopener noreferrer'>
                  <button className="nav-btn">
                    <svg width="25" height="25" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin">
                      <path d="M21,3H3A2.002,2.002,0,0,0,1,5V19a2.002,2.002,0,0,0,2,2H21a2.002,2.002,0,0,0,2-2V5A2.002,2.002,0,0,0,21,3ZM8,18H5V9H8ZM6.5,7.5A1.5,1.5,0,1,1,8,6,1.5,1.5,0,0,1,6.5,7.5ZM19,18H16V13.5a1.5,1.5,0,0,0-3,0V18H10V9h3v1.06a3.963,3.963,0,0,1,3-1.56A4,4,0,0,1,19,12.5Z"></path>
                    </svg>
                  </button>
                </a>
              </li>
              <li className="my-2 md:my-0 group relative">
                <a href="mailto:anshshah2303@gmail.com">
                  <button className="nav-btn">
                    <svg width="25" height="25" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="mail">
                      <path d="M27.5 7h-23A2.503 2.503 0 002 9.5v13A2.503 2.503 0 004.5 25h23a2.503 2.503 0 002.5-2.5v-13A2.503 2.503 0 0027.5 7zM26 9l-9.5 7.5L7 9zm-23 13v-11l7.773 6.24a1.997 1.997 0 002.454 0L22 11v11z"></path>
                    </svg>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
