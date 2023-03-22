import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" />
        <Route path="/admin" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
