import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'
import Course_Catalog_Index from './course_catalog_index'
import CreateAdmin from './create_admin'
import CreateCourse from './create_course'
import All_Course from './all_course'
import WeeklyTimetable from './WeeklyTimetable';
import User_nav from './User_nav';
import Admin_nav from './Admin_nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" />
        <Route path="/admin" />
        <Route path="/course_catalog_index" element={<Course_Catalog_Index />} />
        <Route path="/create_admin" element={<CreateAdmin />} />
        <Route path="/create_course" element={<CreateCourse />} />
        <Route path="/all_course" element={<All_Course />} /> 
        <Route path="/weeklytimetable" element={<WeeklyTimetable />} />
        <Route path="/user_nav" element={<User_nav />} />
        <Route path="/admin_nav" element={<Admin_nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
