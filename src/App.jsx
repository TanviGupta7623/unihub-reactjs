import { useState, useEffect } from 'react'
import Index from './index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './homepage'
import Sidebar from './components/Sidebar'
import SubjectDetail from './components/subjectDetail'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div className="flex items-center bg-gradient-to-r from-purple-700 to-purple-500 justify-center h-screen">
          <h1 className="text-4xl font-bold ">Loading...</h1>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Homepage />} />
          <Route path='/subject/Mathematics' element={<SubjectDetail subject={"Mathematics"}/>}/>
        </Routes>
      )}
    </Router>
  )
}

export default App