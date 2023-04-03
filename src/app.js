import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'
import Course_Catalog from './course_catalog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" />
        <Route path="/admin" />
        <Route path="/course_catalog" element={<Course_Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
