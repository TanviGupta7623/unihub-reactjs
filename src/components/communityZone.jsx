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
          className={`text-lg font-bold mr-4 ${activeTab === 'events' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('events')}
        >
          Events
        </button>
        <button
          className={`text-lg font-bold ${activeTab === 'resources' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('resources')}
        >
          Useful Resources
        </button>
        <button
          className={`text-lg font-bold mr-4 ${activeTab === 'interview' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('interview')}
        >
          Interviews
        </button>
      </div>
      {activeTab === 'alumni' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Alumni</h3>
          <p className="text-gray-600">Purpose: Connects current members with alumni for networking and mentorship.</p>
            <p>Features: Profiles of alumni, their career paths, and opportunities for interaction.</p>
        </div>
      )}
      {activeTab === 'events' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Events</h3>
          <p className="text-gray-600">Purpose: Highlights upcoming and past events within the community.</p>
          <p>Features: Event calendar, RSVP options, event details, and post-event discussions.</p>
        </div>
      )}
      {activeTab === 'resources' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Useful Resources</h3>
          <p className="text-gray-600">Purpose: Displays relevant& targeted advertisements related to the community's interests.</p>
          <p>Features: Ad space for relevant sponsors, promotions, or community announcements.</p>
        </div>
      )}
      {activeTab === 'interview' && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Interviews</h3>
          <p className="text-gray-600">Purpose: Facilitates mock interviews to help members prepare for real job interviews.</p>
          <p>Features: Mock interview scheduling, feedback mechanisms, and resources for improvement.</p>
        </div>
      )}
    </div>
  );
}

export default CommunityZone;
