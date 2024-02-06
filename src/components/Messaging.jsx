import React, { useState } from 'react';

const Messaging = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Khushi',
      message: 'Hey, how are you?',
    },
    {
      id: 2,
      sender: 'Gungun',
      message: 'I am good, thanks for asking. How about you?',
    },
    {
      id: 3,
      sender: 'Khushi',
      message: 'I am doing well too. What are you up to these days?',
    },
    {
      id: 4,
      sender: 'Gungun',
      message: 'Not much, just working on some projects. How about you?',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('Khushi');

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newId = messages.length + 1;
      const newMessageObject = {
        id: newId,
        sender: 'Khushi',
        message: newMessage,
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage('');
    }
  };

  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="flex flex-row h-full">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        <ul className="space-y-2">
          <li
            className={`${
              selectedPerson === 'Khushi' ? 'bg-gray-700' : ''
            } px-4 py-2 rounded-md cursor-pointer`}
            onClick={() => handlePersonSelect('Khushi')}
          >
            Khushi
          </li>
          <li
            className={`${
              selectedPerson === 'Gungun' ? 'bg-gray-700' : ''
            } px-4 py-2 rounded-md cursor-pointer`}
            onClick={() => handlePersonSelect('Gungun')}
          >
            Gungun
          </li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col h-full border-2 rounded-md">
        <div className="flex-1 p-4 overflow-y-scroll">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${
                message.sender === 'Khushi' ? 'text-right' : 'text-left'
              } mb-4`}
            >
              <span className="font-bold">{message.sender}: </span>
              <span>{message.message}</span>
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-400 rounded-md px-4 py-2"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={handleNewMessageChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;