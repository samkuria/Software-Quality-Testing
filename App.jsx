import React, { useState } from 'react';

// Importing Pages (We rename them during import to avoid conflict with components)
import LoginPage from './pages/LoginForm';
import SignupPage from './pages/SignupForm';
import DashboardPage from './pages/Dashboard';
import ReportsPage from './pages/Reports';

function App() {
  // Current view state: 'login', 'signup', 'dashboard', 'reports'
  const [view, setView] = useState('login');

  // Simple function to switch screens
  const navigateTo = (screen) => {
    setView(screen);
  };

  return (
    <div className="app-main">
      {/* 1. Login View */}
      {view === 'login' && (
        <LoginPage onNavigate={navigateTo} />
      )}

      {/* 2. Signup View */}
      {view === 'signup' && (
        <SignupPage onNavigate={navigateTo} />
      )}

      {/* 3. Authenticated Views (Dashboard & Reports) */}
      {(view === 'dashboard' || view === 'reports') && (
        <div className="dashboard-layout" style={{ display: 'flex', height: '100vh' }}>
          
          {/* Sidebar logic could live here or in a separate component */}
          <nav className="sidebar" style={{ width: '200px', background: '#2c3e50', color: 'white' }}>
             <button onClick={() => navigateTo('dashboard')}>Dashboard</button>
             <button onClick={() => navigateTo('reports')}>Records</button>
             <button onClick={() => navigateTo('login')}>Logout</button>
          </nav>

          <main className="content" style={{ flex: 1, padding: '20px' }}>
            {view === 'dashboard' ? <DashboardPage /> : <ReportsPage />}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
