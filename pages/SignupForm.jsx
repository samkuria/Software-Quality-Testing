import React from 'react';
import SignupFormCard from '../components/SignupForm';
import '../App.css'; // Ensure this path is correct for styling

function SignupForm({ onNavigate }) {
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Logic for registration goes here
    onNavigate('dashboard');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h2>Create Account</h2>
        <p>Start tracking your health journey today.</p>
        
        <SignupFormCard 
          onSubmit={handleSignupSubmit} 
          onGoToLogin={() => onNavigate('login')} 
        />
      </div>
    </div>
  );
}

export default SignupForm;
