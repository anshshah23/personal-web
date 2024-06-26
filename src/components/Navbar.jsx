import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Assuming Logo component is defined elsewhere
import InstaLogo from '../images/instagram.png';
import GithubLogo from '../images/Github.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <nav className={`navbar p-4 w-full fixed top-0 z-50 ${isScrolled ? 'opaque' : ''}`}>
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="relative z-50">
          <Logo />
        </div>
        <div className="md:hidden relative z-50" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-90' : 'rotate-0'} ease-in-out duration-1000`}
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
          className={`${isOpen ? 'fixed inset-y-0 right-0 w-full flex flex-col items-center justify-center bg-blue-950 z-80 transition-transform duration-1000 ease-in-out' : 'hidden md:flex md:flex-row md:justify-between md:items-center md:space-x-10'}`}
        >
          <div>
            <ul className="flex flex-col font-bold md:flex-row md:items-center md:space-x-10">
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/" className="hover:text-white text-xl md:text-xl text-gray-300">
                  Home
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/about" className="hover:text-white text-xl md:text-xl text-gray-300">
                  About
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/projects" className="hover:text-white text-xl md:text-xl text-gray-300">
                  Projects
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative md:mr-10" onClick={() => setIsOpen(false)}>
                <Link to="/contact" className="hover:text-white text-xl md:text-xl text-gray-300">
                  Contact
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-center md:space-x-10">
              <li className="my-2 md:my-0 group relative">
                <a href="https://instagram.com/anshshah.79" target="_blank" rel="noopener noreferrer">
                  <img src={InstaLogo} alt="Instagram" className="h-6" />
                </a>
              </li>
              <li className="my-2 md:my-0 group relative">
                <a href="https://github.com//anshshah23" target='_blank' rel='noopener noreferrer'>
                  <img src={GithubLogo} alt="Github" className='h-6' />
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
