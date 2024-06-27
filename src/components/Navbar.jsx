import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Assuming Logo component is defined elsewhere
import InstaLogo from '../images/instagram.png';
import GithubLogo from '../images/Github.png';
import LinkedInLogo from '../images/LinkedIn.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <nav className={`p-4 w-full top-0 z-1000 ${isScrolled ? 'nav-scrolled' : 'bg-blue-950 bg-opacity-65'}`}>
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
                <Link to="/" className="hover:text-yellow-400 text-xl md:text-xl text-white">
                  Home
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/about" className="hover:text-yellow-400 text-xl md:text-xl text-white">
                  About
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative" onClick={() => setIsOpen(false)}>
                <Link to="/projects" className="hover:text-yellow-400 text-xl md:text-xl text-white">
                  Projects
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-1000"></span>
              </li>
              <li className="my-2 md:my-0 group relative md:mr-10" onClick={() => setIsOpen(false)}>
                <Link to="/contact" className="hover:text-yellow-400 text-xl md:text-xl text-white">
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
                  <img src={InstaLogo} alt="Instagram" className="h-6 shadow-sm rounded-md hover:shadow-white" />
                </a>
              </li>
              <li className="my-2 md:my-0 group relative">
                <a href="https://github.com/anshshah23" target='_blank' rel='noopener noreferrer'>
                  <img src={GithubLogo} alt="Github" className='h-6 shadow-sm rounded-full hover:shadow-white' />
                </a>
              </li>
              <li className="my-2 md:my-0 group relative">
                <a href="https://linkedin.in/in/anshshah23" target='_blank' rel='noopener noreferrer'>
                  <img src={LinkedInLogo} alt="Github" className='h-6 rounded-lg shadow-sm hover:shadow-white' />
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
