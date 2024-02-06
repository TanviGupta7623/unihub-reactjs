import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Link } from 'react-router-dom';

import './App.css'  
import Academic from './components/academic';
import Chillzone from './chillzone';
import CommunityZone from './components/communityZone';

export default function Homepage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openTab, setOpenTab] = useState('Academic');
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        };
    const handleTabClick = (tab) => {
        setOpenTab(tab);
        };

  return (
    <div>
      <Navbar onSidebarToggle={handleSidebarToggle} />
      <div className='flex  gap-4'>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} tab={handleTabClick} />}
  {openTab === 'Academic' && <Academic/>}
      
      {openTab === 'Chill Zone'  && <Chillzone/>}
      {openTab==="Community" &&<CommunityZone/>}
      </div>
    </div>
  )
}
