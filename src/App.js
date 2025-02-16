import React from 'react';

import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './pages/authPages/HomePage/Homepage';
import LoginPage from './pages/authPages/LoginPage/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage/RegisterPage';
import AlertComponent from './shared/components/AlertComponent';


function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>

      {/* Home page */}
      <Route 
      exact
      path='/'
      element={<Homepage />}
      />

      {/* Login Route */}
      <Route 
       
       path='/login'
       element={<LoginPage />}
      />
      {/* Register Route */}
      <Route 
       
       path='/register'
       element={<RegisterPage />}
      />


    </Routes>
   </BrowserRouter>
   <AlertComponent />
   </>
  );
}

export default App;
