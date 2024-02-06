import React, { useState } from 'react';

function CommunityZone() {
  const [activeTab, setActiveTab] = useState('alumni');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-4">
        <button
          className={`text-lg font-bold mr-4 ${activeTab === 'alumni' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('alumni')}
        >
          Alumni
        </button>
        <button
          className={`text-lg font-bold ${activeTab === 'events' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('events')}
        >
          Events
        </button>
      </div>
      {activeTab === 'alumni' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Alumni</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
      {activeTab === 'events' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Events</h3>
          <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      )}
    </div>
  );
}

export default CommunityZone;