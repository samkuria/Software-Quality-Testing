import React from 'react';

function SignupFormCard({ onSubmit, onGoToLogin }) {
  return (
    <div className="login-card-form">
      <form onSubmit={onSubmit}>
        
        {/* Basic Info */}
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" required />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+254 7..." required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required />
        </div>

        {/* Social Logins - HCI: Recognition over Recall */}
        <div className="social-login-separator">
          <span>Or sign up with</span>
        </div>

        <div className="social-icons-container">
          <button type="button" className="social-btn google">Google</button>
          <button type="button" className="social-btn facebook">Facebook</button>
          <button type="button" className="social-btn linkedin">LinkedIn</button>
        </div>

        {/* Terms and Conditions - HCI: Constraints */}
        <div className="terms-container">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms"> I agree to the <span>Terms & Conditions</span></label>
        </div>

        <button type="submit" className="login-btn">Create Account</button>

        <p className="auth-link">
          Already have an account? 
          <span onClick={onGoToLogin} style={{ cursor: 'pointer', marginLeft: '5px' }}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignupFormCard;
