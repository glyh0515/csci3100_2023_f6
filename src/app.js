import React from 'react';
import './CSS/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'
import ProfilePage from './user/profile'
import Course_Catalog_Index from './user/course_catalog'
import CreateAdmin from './admin/create_admin'
import Create_Course from './admin/create_course'
import All_Course from './admin/all_course'
import WeeklyTimetable from './component/WeeklyTimetable';
import Swap from './user/swap';
import AdminProfile from './admin/admin_profile';
import Admin_view_user from './admin/Admin_view_user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Course_Catalog_Index />} />
        <Route path="/create_admin" element={<CreateAdmin />} />
        <Route path="/create_course" element={<Create_Course />} />
        <Route path="/all_course" element={<All_Course />} />
        <Route path="/all_user" element={<Admin_view_user />} />
        <Route path="/weeklytimetable" element={<WeeklyTimetable />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/admin_profile" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
