import { BrowserRouter } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import React from 'react';

import './App.css'
import Navbar from "./pages/Navbar";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes> */}
      <HomePage />

    </BrowserRouter>

  )
}

export default App
