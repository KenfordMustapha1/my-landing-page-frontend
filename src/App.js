// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import { AuthProvider } from './utils/authContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <LandingPage />
      </AuthProvider>
    </Router>
  );
}

export default App;