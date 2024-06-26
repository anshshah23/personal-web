import React from 'react';
import { Link } from 'react-router-dom';
import Type from './Type.jsx';
import Tilt from 'react-parallax-tilt';
import Profile from '../images/Profile.png';
import { BsPerson } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';

const Home = () => {
  return (
    <div className="flex flex-col lg:pt-32 lg:pl-52 lg:mt-2 lg:flex-row items-center justify-center bg-transparent text-white">
      <div className="p-10 lg:w-1/2">
        <h1 className="text-2xl lg:text-5xl">Hello there!</h1>
        <h1 className='text-2xl lg:text-5xl'>I'M </h1>
        <h1 className="text-4xl lg:text-8xl font-bold">
          <span className="text-yellow-400">Ansh Shah</span>
        </h1>
        <Type />
        <div className="mt-8 flex flex-row pr-4">
          <Link to="/about">
            <button className="bg-yellow-400 hover:bg-white text-gray-900 mr-4 px-6 py-2 r-12 rounded-lg font-semibold flex items-center">
              About Me
              <BsPerson className="ml-2" />
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-yellow-400 hover:bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold flex items-center">
              Contact
              <CgPhone className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div>
          <img 
            className="w-64 h-64 lg:w-96 lg:h-96 transform transition-transform duration-500 hover:scale-110" 
            src={Profile} 
            alt="Profile" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
