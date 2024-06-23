// src/pages/StudentsPage.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import StudentNavbar from '../components/StudentNavbar';
// import Games from '../components/Games';
// import Leaderboards from '../components/Leaderboards';
// import Courses from '../components/Courses';
import StudentNavbar from './components/StudentNavbar';
import Games from './components/Games';
import Leaderboards from './components/Leaderboards';
import Courses from './components/Courses';
import StudentProducts from './components/StudentProducts';

const StudentsPage = () => {
  return (
    <Router>
      <div>
        <h1>Students Page</h1>
        <StudentNavbar />  
        <Routes>
          <Route path="/students/games" element={<Games />} />
          <Route path="/students/leaderboards" element={<Leaderboards />} />
          <Route path="/students/courses" element={<Courses />} />
          <Route path="/students/studentproducts" element={<StudentProducts/>} />
        </Routes> 
      </div> 
    </Router>
  );
};

export default StudentsPage;
