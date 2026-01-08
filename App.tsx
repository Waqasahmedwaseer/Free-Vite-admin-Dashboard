
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Analytics from './pages/Analytics';
import Billing from './pages/Billing';
import AIWorkspace from './pages/AIWorkspace';
import Calendar from './pages/Calendar';
import Documents from './pages/Documents';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';
import ActivityLogs from './pages/ActivityLogs';
import Support from './pages/Support';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Layout from './components/Layout';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('waw_pro_auth') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('waw_pro_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('waw_pro_auth');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-x-hidden">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
          <Route path="/signup" element={!isAuthenticated ? <Signup onSignup={handleLogin} /> : <Navigate to="/" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route path="/" element={isAuthenticated ? <Layout onLogout={handleLogout}><Dashboard /></Layout> : <Navigate to="/login" />} />
          <Route path="/projects" element={isAuthenticated ? <Layout onLogout={handleLogout}><Projects /></Layout> : <Navigate to="/login" />} />
          <Route path="/tasks" element={isAuthenticated ? <Layout onLogout={handleLogout}><Tasks /></Layout> : <Navigate to="/login" />} />
          <Route path="/analytics" element={isAuthenticated ? <Layout onLogout={handleLogout}><Analytics /></Layout> : <Navigate to="/login" />} />
          <Route path="/billing" element={isAuthenticated ? <Layout onLogout={handleLogout}><Billing /></Layout> : <Navigate to="/login" />} />
          <Route path="/ai-workspace" element={isAuthenticated ? <Layout onLogout={handleLogout}><AIWorkspace /></Layout> : <Navigate to="/login" />} />
          <Route path="/calendar" element={isAuthenticated ? <Layout onLogout={handleLogout}><Calendar /></Layout> : <Navigate to="/login" />} />
          <Route path="/documents" element={isAuthenticated ? <Layout onLogout={handleLogout}><Documents /></Layout> : <Navigate to="/login" />} />
          <Route path="/messages" element={isAuthenticated ? <Layout onLogout={handleLogout}><Messages /></Layout> : <Navigate to="/login" />} />
          <Route path="/integrations" element={isAuthenticated ? <Layout onLogout={handleLogout}><Integrations /></Layout> : <Navigate to="/login" />} />
          <Route path="/activity" element={isAuthenticated ? <Layout onLogout={handleLogout}><ActivityLogs /></Layout> : <Navigate to="/login" />} />
          <Route path="/support" element={isAuthenticated ? <Layout onLogout={handleLogout}><Support /></Layout> : <Navigate to="/login" />} />
          <Route path="/team" element={isAuthenticated ? <Layout onLogout={handleLogout}><Team /></Layout> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Layout onLogout={handleLogout}><Profile /></Layout> : <Navigate to="/login" />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        {isAuthenticated && <ChatWidget />}
      </div>
    </BrowserRouter>
  );
};

export default App;
