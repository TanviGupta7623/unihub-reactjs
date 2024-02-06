import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectDetail from './subjectDetail';

const Academic = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const subjects = [
    { branch: 'CSE', year: '1', subject: 'Mathematics' },
    { branch: 'CSE', year: '1', subject: 'Physics' },
    { branch: 'CSE', year: '1', subject: 'Chemistry' },
    { branch: 'CSE', year: '2', subject: 'Data Structures' },
    { branch: 'CSE', year: '2', subject: 'Algorithms' },
    { branch: 'CSE', year: '2', subject: 'Operating Systems' },
    { branch: 'CSE', year: '3', subject: 'Computer Networks' },
    { branch: 'CSE', year: '3', subject: 'Database Systems' },
    { branch: 'CSE', year: '3', subject: 'Software Engineering' },
    { branch: 'CSE', year: '4', subject: 'Artificial Intelligence' },
    { branch: 'CSE', year: '4', subject: 'Computer Graphics' },
    { branch: 'CSE', year: '4', subject: 'Distributed Systems' },
    { branch: 'ECE', year: '1', subject: 'Mathematics' },
    { branch: 'ECE', year: '1', subject: 'Physics' },
    { branch: 'ECE', year: '1', subject: 'Chemistry' },
    { branch: 'ECE', year: '2', subject: 'Digital Circuits' },
    { branch: 'ECE', year: '2', subject: 'Analog Circuits' },
    { branch: 'ECE', year: '2', subject: 'Signals and Systems' },
    { branch: 'ECE', year: '3', subject: 'Microprocessors and Microcontrollers' },
    { branch: 'ECE', year: '3', subject: 'Communication Systems' },
    { branch: 'ECE', year: '3', subject: 'Control Systems' },
    { branch: 'ECE', year: '4', subject: 'VLSI Design' },
    { branch: 'ECE', year: '4', subject: 'Embedded Systems' },
    { branch: 'ECE', year: '4', subject: 'Wireless Communication' },
    { branch: 'ME', year: '1', subject: 'Mathematics' },
    { branch: 'ME', year: '1', subject: 'Physics' },
    { branch: 'ME', year: '1', subject: 'Chemistry' },
    { branch: 'ME', year: '2', subject: 'Thermodynamics' },
    { branch: 'ME', year: '2', subject: 'Fluid Mechanics' },
    { branch: 'ME', year: '2', subject: 'Strength of Materials' },
    { branch: 'ME', year: '3', subject: 'Manufacturing Processes' },
    { branch: 'ME', year: '3', subject: 'Machine Design' },
    { branch: 'ME', year: '3', subject: 'Heat Transfer' },
    { branch: 'ME', year: '4', subject: 'Automobile Engineering' },
    { branch: 'ME', year: '4', subject: 'Robotics' },
    { branch: 'ME', year: '4', subject: 'Renewable Energy Systems' },
    { branch: 'CE', year: '1', subject: 'Mathematics' },
    { branch: 'CE', year: '1', subject: 'Physics' },
    { branch: 'CE', year: '1', subject: 'Chemistry' },
    { branch: 'CE', year: '2', subject: 'Structural Analysis' },
    { branch: 'CE', year: '2', subject: 'Geotechnical Engineering' },
    { branch: 'CE', year: '2', subject: 'Fluid Mechanics' },
    { branch: 'CE', year: '3', subject: 'Transportation Engineering' },
    { branch: 'CE', year: '3', subject: 'Environmental Engineering' },
    { branch: 'CE', year: '3', subject: 'Construction Management' },
    { branch: 'CE', year: '4', subject: 'Structural Dynamics' },
    { branch: 'CE', year: '4', subject: 'Earthquake Engineering' },
    { branch: 'CE', year: '4', subject: 'Advanced Concrete Technology' },
  ];
  const sortedSubjects = subjects.sort((a, b) => a.year.localeCompare(b.year));

  const filteredSubjects = sortedSubjects.filter(
    (subject) =>
      (selectedYear === '' || subject.year === selectedYear) &&
      (selectedBranch === '' || subject.branch === selectedBranch) &&
      (selectedSubject === '' || subject.subject === selectedSubject)
  );
  const uniqueSubjects = filteredSubjects.reduce((acc, subject) => {
    if (!acc.find((s) => s.subject === subject.subject)) {
      acc.push(subject);
    }
    return acc;
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <div className='flex items-center mr-4'>
          <label htmlFor="year-select">Year:</label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            className="block w-full mt-1 boder-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-1"
          >
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>
        <div className='flex items-center mr-4'>
          <label htmlFor="branch-select">Branch:</label>
          <select
            id="branch-select"
            value={selectedBranch}
            onChange={handleBranchChange}
            className="block w-full mt-1 boder-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-1"
          >
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="ECE">Electronics and Communication Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
          </select>
        </div>
        <div className='flex items-center'>
          <label htmlFor="subject-select">Subject:</label>
          <select
            id="subject-select"
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="block w-full mt-1 boder-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-1"
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Algorithms">Algorithms</option>
            <option value="Operating Systems">Operating Systems</option>
            <option value="Digital Circuits">Digital Circuits</option>
            <option value="Analog Circuits">Analog Circuits</option>
            <option value="Signals and Systems">Signals and Systems</option>
            <option value="Thermodynamics">Thermodynamics</option>
            <option value="Fluid Mechanics">Fluid Mechanics</option>
            <option value="Structural Analysis">Structural Analysis</option>
            <option value="Geotechnical Engineering">Geotechnical Engineering</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {uniqueSubjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white rounded-lg flex gap-2 justify-between shadow-md p-4 text-center"
          >
            <div className='flex gap-2 items-center'>
            <h1 className='font-bold'>{index}.</h1>
            <h2 className="text-xl font-bold">{subject.subject}</h2>
            <p className="text-gray-500 text-sm">({subject.branch}</p>
            <p className="text-gray-500 text-sm">{subject.year+"nd year"})</p>
            </div>
            <div>
            <Link
              to={`/subject/${subject.subject}`}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
              onClick={() => {return <SubjectDetail />}}
            >
              View
            </Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Academic;