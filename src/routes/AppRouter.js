import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';

export const AppRouter = () => {
    return (
        <Router>

           <div>

            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/" element={ <Login /> } />
            </Routes>

           </div>

        </Router>
    );
}