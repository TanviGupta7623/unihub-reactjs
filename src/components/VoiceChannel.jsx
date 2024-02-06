import React from 'react';

const VoiceChannel = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">Voice Channel</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <span className="text-gray-400">No users connected</span>
      </div>
      <div className="bg-gray-800 text-white p-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Connect
        </button>
      </div>
    </div>
  );
};

export default VoiceChannel;