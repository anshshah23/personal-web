import React from 'react';
import { Link } from 'react-router-dom';
import Type from '../components/Type.jsx';
import Profile from '../images/Profile.png';
import { BsPerson } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import '../components/styles/Home.css';
const Home = () => {
  return (
    <div className="flex flex-col lg:pt-20 lg:pl-52 lg:mt-2 lg:flex-row items-center justify-center bg-transparent text-white">
      <div className="p-10 lg:w-1/2">
        <h1 className="text-2xl lg:text-5xl">Hello there!</h1>
        <h1 className='text-2xl lg:text-5xl'>I'm </h1>
        <h1 className="text-4xl lg:text-8xl font-bold">
          <span className="text-yellow-400">Ansh Shah</span>
        </h1>
        <Type />
        <div className="mt-8 flex flex-row pr-4">
          <Link to="/about">
            <button
              className="items-center mr-4 justify-center home-button mt-8"
            >
              About-Me
              <BsPerson className="inline-block md:ml-2" />
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="items-center justify-center home-button mt-8"
            >
              Contact
              <CgPhone className="inline-block sm:ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div>
          <Link to="/about">
            <img
              className="w-64 h-64 lg:w-96 lg:h-96 transform transition-transform duration-500 hover:scale-110"
              src={Profile}
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
