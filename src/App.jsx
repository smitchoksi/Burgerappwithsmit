import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus';

function App() {
  
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Aboutus" element={<Aboutus />} />
    </Routes>
   </Router>
  )
}

export default App
