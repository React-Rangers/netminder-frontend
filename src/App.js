import React, { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import Task from './pages/TaskForm';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  function renderPage() {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if (currentPage === 'LoginForm') {
      return <LoginForm />
    }
    if (currentPage === 'SignUpForm') {
      return <SignUpForm />
    }
    if (currentPage === 'Task') {
      return <Task />
    }
  }
  return (
    <>
      <div>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
      <footer className='footer'>
        &copy; 2023 React Rangers. All rights reserved.
      </footer>
    </>
  );
};

export default App;
