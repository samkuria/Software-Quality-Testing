import React, { useState } from 'react';

function SignupFormCard({ onSubmit, onGoToLogin }) {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', password: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Validation Logic (The "Gatekeeper")
  const isFormValid = 
    formData.name && 
    formData.email && 
    formData.phone && 
    formData.password.length >= 6 && 
    agreed;

  // 4. Social Login Handlers
  const handleSocialLogin = (platform) => {
    alert(`Redirecting to ${platform} OAuth...`);
    // In a real app, window.location.href = `api/auth/${platform}`
  };

  return (
    <div className="signup-container">
      <form onSubmit={(e) => { e.preventDefault(); if(isFormValid) onSubmit(formData); }}>
        <div className="input-group">
          <label>Full Name</label>
          <input name="name" type="text" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input name="phone" type="tel" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} required />
        </div>

        <div className="social-login-separator"><span>Or sign up with</span></div>
        <div className="social-icons-container">
          {['Google', 'Facebook', 'LinkedIn'].map(p => (
            <button key={p} type="button" className="social-btn" onClick={() => handleSocialLogin(p)}>{p}</button>
          ))}
        </div>

        <div className="terms-container">
          <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} id="terms" />
          <label htmlFor="terms">
            I agree to the <span onClick={() => setShowTerms(true)} style={{cursor:'pointer', color:'var(--primary-teal)'}}>Terms & Conditions</span>
          </label>
        </div>

        <button type="submit" className="login-btn" disabled={!isFormValid} style={{ opacity: isFormValid ? 1 : 0.5 }}>
          Create Account
        </button>
      </form>

      {/* Terms Modal (HCI: Feedback/Overlay) */}
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Terms & Conditions</h3>
            <p>1. Your health data is encrypted.<br/>2. We do not sell your vitals.<br/>3. Use this for tracking, not medical diagnosis.</p>
            <button onClick={() => setShowTerms(false)} className="login-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupFormCard;
