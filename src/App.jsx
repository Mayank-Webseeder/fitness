import React, { useState } from 'react';
import Login from './components/Login.jsx';
import FitnessDashboard from './components/FitnessDashboard.jsx';
// import AboutPage from './AboutPage.jsx';
// import SettingsPage from './SettingsPage.jsx';

// Main application component that manages the current page and login state
const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginSuccess = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  // Conditionally render the correct component based on the current page state
  switch (currentPage) {
    case 'login':
      return <Login onLoginSuccess={handleLoginSuccess} />;
    case 'dashboard':
      return <FitnessDashboard onLogout={handleLogout} onPageChange={handlePageChange} />;
    case 'about':
      // return <AboutPage onPageChange={handlePageChange} />;
    case 'settings':
      // return <SettingsPage onPageChange={handlePageChange} />;
    default:
      return <Login onLoginSuccess={handleLoginSuccess} />;
  }
};

export default App;
