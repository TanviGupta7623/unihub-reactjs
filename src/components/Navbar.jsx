import React, { useState } from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png';
import profilePhoto from '../assets/profile-photo.png';

const Navbar = ({onSidebarToggle}) => {

  const handleSidebarToggle = () => {
    onSidebarToggle();
  };

  return (
    <nav className="bg-purple-500 text-white flex justify-between items-center px-4 py-1">
      <div className="flex items-center">
        <button
          className="mr-4 p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          onClick={handleSidebarToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <img className="h-16 w-16" src="https://media.discordapp.net/attachments/1164497786964803585/1204018439929335879/logo2d-removebg-preview.png?ex=65d3348d&is=65c0bf8d&hm=9416987d5ea968092b9456dc7bbee5fd500f536b3f159fb5473d5f6ab2e8fec5&=&format=webp&quality=lossless&width=621&height=627" alt="App Logo" />
        <h1 className="text-xl font-bold">UniHub</h1>
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