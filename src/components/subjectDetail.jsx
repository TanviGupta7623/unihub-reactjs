import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function SubjectDetail({ subject }) {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);

  const handleNotesClick = () => {
    setIsNotesOpen(!isNotesOpen);
  };

  const handleBooksClick = () => {
    setIsBooksOpen(!isBooksOpen);
  };

  return (
    <>
    <Navbar/>
    <div className='flex justify-center mx-auto'>
      <h2 className="text-2xl text-blue-950  font-bold bg-gradient-to-r from-cyan-200 to-blue-500 w-screen pl-3">Mathematics<span className='text-gray-600 text-md'>(1st year)</span></h2></div>
    <div className='bg-gradient-to-r from-cyan-200 to-blue-500 h-screen w-screen'>
    <div className=" flex flex-col items-start ml-4 justify-center">
      <div>
      <div className="mb-4">
        
        <div className='bg-white rounded-lg shadow-md p-4 flex-1"'>
        <h3 className="text-lg font-bold mb-2" onClick={handleNotesClick} style={{ cursor: 'pointer' }}>
          Notes
        </h3></div>
        {isNotesOpen && (
          <div className="flex gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h4 className="text-lg font-bold mb-2">Note 1</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h4 className="text-lg font-bold mb-2">Note 2</h4>
              <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h4 className="text-lg font-bold mb-2">Note 3</h4>
              <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className='bg-white rounded-lg shadow-md p-4 flex-1'>
        <h3 className="text-lg font-bold mb-2" onClick={handleBooksClick} style={{ cursor: 'pointer' }}>
          Books
        </h3></div>
        {isBooksOpen && (
          <div className="flex gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h4 className="text-lg font-bold mb-2">Book 1</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h4 className="text-lg font-bold mb-2">Book 2</h4>
              <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h4 className="text-lg font-bold mb-2">Book 3</h4>
              <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        )}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Recommended Video</h3>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-bold mb-2">Engineering Mathematics</h4>
          <p className="text-gray-600">vector spaces in one shot video.</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">Watch on YouTube</a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default SubjectDetail;