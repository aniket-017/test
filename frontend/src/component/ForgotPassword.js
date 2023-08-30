import React, { useState } from 'react';
import "./forgotPassword.css"
import { forgotPassword } from '../actions/userActions';
import { useSelector, useDispatch } from "react-redux";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
   await dispatch(forgotPassword(myForm));
    setIsEmailSent(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Forgot Password</h2>
        {isEmailSent ? (
          <p>An email has been sent to {email} with instructions to reset your password.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <p>Enter your registered email to reset your password.</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Send Reset Email</button>
          </form>
        )}
        <p className="toggle-link">
          <a href="/">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
