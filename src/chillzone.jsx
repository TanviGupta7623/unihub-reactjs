import React, { useState } from 'react';
import Messaging from "./components/Messaging";
import Groups from './components/Groups';
import VoiceChannel from './components/VoiceChannel';

function Chillzone() {
  const [selectedOption, setSelectedOption] = useState('messaging');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col justify-center w-full">
          <h1 className="text-2xl text-black mx-auto font-bold">Chillzone</h1>
      <div className=" text-white p- mx-auto" >
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              className={`${
                selectedOption === 'messaging'
                  ? 'bg-gray-700'
                  : 'bg-gray-600'
              } px-4 py-2 rounded-md`}
              onClick={() => handleOptionClick('messaging')}
            >
              Messaging
            </button>
            <button
              className={`${
                selectedOption === 'groups'
                  ? 'bg-gray-700'
                  : 'bg-gray-600'
              } px-4 py-2 rounded-md`}
              onClick={() => handleOptionClick('groups')}
            >
              Groups
            </button>
            <button
              className={`${
                selectedOption === 'voiceChannel'
                  ? 'bg-gray-700'
                  : 'bg-gray-600'
              } px-4 py-2 rounded-md`}
              onClick={() => handleOptionClick('voiceChannel')}
            >
              Voice Channel
            </button>
          </div>
        </div>
        
      </div>
      <div className="flex-1 p-4">
        {selectedOption === 'messaging' && <Messaging />}
        {selectedOption === 'groups' && <Groups />}
        {selectedOption === 'voiceChannel' && <VoiceChannel />}
      </div>
    </div>
  );
}

export default Chillzone;