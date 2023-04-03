import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'
import Course_Catalog_Index from './course_catalog_index'
import CreateAdmin from './create_admin'
import CreateCourse from './create_course'

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
