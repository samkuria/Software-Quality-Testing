import React from 'react';

function LoginFormCard({ onSubmit, onGoToSignup }) {
  return (
    <form className="login-card-form" onSubmit={onSubmit}>
      <div className="input-group">
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter username" required />
      </div>

      <div className="input-group" style={{ marginTop: '15px' }}>
        <label>Password</label>
        <input type="password" name="password" placeholder="••••••••" required />
      </div>

      <button type="submit" className="login-btn" style={{ marginTop: '20px' }}>
        Login
      </button>

      <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
        Don't have an account? 
        <span 
          onClick={onGoToSignup} 
          style={{ color: '#3498db', cursor: 'pointer', marginLeft: '5px', fontWeight: 'bold' }}
        >
          Create one
        </span>
      </p>
    </form>
  );
}

export default LoginFormCard;
