import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform password reset logic here
    // You can replace this with your actual password reset logic
    // For example, using an API request to a server
    // After successful password reset, you can set setIsPasswordReset(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Reset Password</h2>
        {isPasswordReset ? (
          <p>Your password has been successfully reset.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <p>Enter your new password.</p>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        )}
        <p className="toggle-link">
          <a href="/">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
