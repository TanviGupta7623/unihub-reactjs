import React, { useState } from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png';
import profilePhoto from '../assets/profile-photo.png';

const Navbar = ({onSidebarToggle}) => {

  const handleSidebarToggle = () => {
    onSidebarToggle();
  };

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <button
          className="mr-4 p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          onClick={handleSidebarToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <img src={logo} alt="App Logo" className="h-8 mr-2" />
        <h1 className="text-lg font-bold">My App</h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <img src={profilePhoto} alt="Profile Photo" className="h-8 w-8 rounded-full mr-2" />
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;