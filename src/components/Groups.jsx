import React, { useState } from 'react';

const Groups = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'Group 1',
      content: [
        {
          id: 1,
          type: 'progress',
          question: 'what you are wearing on freshers?',
          options: ['saree', 'western', 'something different'],
          votes: [2, 3, 1],
        },
        {
          id: 2,
          type: 'message',
          sender: 'khushi',
          message: 'Hey, how are you?',
        },
        {
          id: 3,
          type: 'message',
          sender: 'gungun',
          message: 'I am good, thanks for asking. How about you?',
        },
        {
          id: 4,
          type: 'message',
          sender: 'khushi',
          message: 'I am doing well too. What are you up to these days?',
        },
        {
          id: 5,
          type: 'message',
          sender: 'gungun',
          message: 'Not much, just working on some projects. How about you?',
        },
      ],
    },
    {
      id: 2,
      name: 'Group 2',
      content: [
        {
          id: 1,
          type: 'progress',
          question: 'What is your favorite food?',
          options: ['Pizza', 'Burgers', 'Tacos'],
          votes: [1, 2, 3],
        },
        {
          id: 2,
          type: 'message',
          sender: 'Bob',
          message: 'Hey, how are you?',
        },
        {
          id: 3,
          type: 'message',
          sender: 'Alice',
          message: 'I am good, thanks for asking. How about you?',
        },
        {
          id: 4,
          type: 'message',
          sender: 'Bob',
          message: 'I am doing well too. What are you up to these days?',
        },
        {
          id: 5,
          type: 'message',
          sender: 'Alice',
          message: 'Not much, just working on some projects. How about you?',
        },
      ],
    },
  ]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  const handleVote = (optionIndex) => {
  const updatedVotes = [...selectedGroup.content[0].votes];
  updatedVotes[optionIndex]++;
  const updatedContent = [
    {
      ...selectedGroup.content[0],
      votes: updatedVotes,
    },
    ...selectedGroup.content.slice(1),
  ];
  const updatedGroup = {
    ...selectedGroup,
    content: updatedContent,
  };
  const updatedGroups = groups.map((group) =>
    group.id === updatedGroup.id ? updatedGroup : group
  );
  setGroups(updatedGroups);
  setSelectedGroup(updatedGroup);
};

  return (
    <div className="flex flex-row h-full">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Groups</h2>
        <ul className="space-y-2">
          {groups.map((group) => (
            <li
              key={group.id}
              className={`${
                selectedGroup && selectedGroup.id === group.id
                  ? 'bg-gray-700'
                  : ''
              } px-4 py-2 rounded-md cursor-pointer`}
              onClick={() => handleGroupSelect(group)}
            >
              {group.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col h-full border-2 rounded-md">
        {selectedGroup ? (
          <div className="flex-1 p-4 overflow-y-scroll">
            {selectedGroup.content.map((item) => (
              <div key={item.id} className="mb-4">
                {item.type === 'progress' ? (
                  <div>
                    <h3 className="font-bold mb-2">{item.question}</h3>
                    <ul className="space-y-2">
                      {item.options.map((option, index) => (
                        <li key={index}>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio"
                              name="vote"
                              value={index}
                              checked={
                                index ===
                                item.votes.indexOf(
                                  Math.max(...item.votes)
                                )
                              }
                              onChange={() => handleVote(index)}
                            />
                            <span className="ml-2">{option}</span>
                          </label>
                          <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                              <div
                                style={{
                                  width: `${
                                    (item.votes[index] /
                                      item.votes.reduce(
                                        (total, vote) => total + vote,
                                        0
                                      )) *
                                    100
                                  }%`,
                                }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                              ></div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <span className="font-bold">{item.sender}: </span>
                    <span>{item.message}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <span className="text-gray-400">No group selected</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Groups;