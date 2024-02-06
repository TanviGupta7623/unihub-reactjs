import React, { useState } from 'react';

const Sidebar = ({isOpen,tab}) => {
  const [activeTab, setActiveTab] = useState('Academic');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    tab(tabName);
  };

  return (
    <div className={`bg-gray-100 h-screen w-[30vh] transition-all duration-[2000ms] ease-out ${isOpen? `translate-x-0 opacity-100`: 
    `translate-x-full opacity-0`}`}>
      <div className="flex flex-col justify-between h-full">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Select Your Zone</h2>
          <div className="flex flex-col space-y-2">
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'Academic' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => handleTabClick('Academic')}
            >
              Academic
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'Chill Zone' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => handleTabClick('Chill Zone')}
            >
              Chill Zone
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'Community' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => handleTabClick('Community')}
            >
              Community
            </button>
          </div>
        </div>
        <div className="p-4">
          {activeTab === 'Academic' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Academic Tab Content</h2>
              <p className="text-gray-700">This is the content for the Academic tab.</p>
            </div>
          )}
          {activeTab === 'Chill Zone' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Chill Zone Tab Content</h2>
              <p className="text-gray-700">This is the content for the Chill Zone tab.</p>
            </div>
          )}
          {activeTab === 'Community' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Community Tab Content</h2>
              <p className="text-gray-700">This is the content for the Community tab.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;