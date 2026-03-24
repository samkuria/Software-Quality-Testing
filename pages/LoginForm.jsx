import React from 'react';
import LoginFormCard from '../components/LoginForm'; // Ensure this path is correct
import '../App.css'; // Importing the CSS for styling

function LoginForm({ onNavigate }) {
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted!");
    onNavigate('dashboard'); // This triggers the view change in App.jsx
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h2 style={{ marginBottom: '10px' }}>Health Tracker Login</h2>
        <p style={{ marginBottom: '30px', color: '#666' }}>Securely access your vitals</p>
        
        {/* If this line is missing or broken, the card will be blank */}
        <LoginFormCard 
          onSubmit={handleLoginSubmit} 
          onGoToSignup={() => onNavigate('signup')} 
        />
      </div>
    </div>
  );
}

export default LoginForm;
