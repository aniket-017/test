import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../actions/userActions";
import './RegisterPage.css'; // Import your CSS file
import Card from "./Card.js"
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword.js"; 

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(state => state.user);

  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [cpassword, setCpassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlecpassword = e => {
    
    setCpassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isLogin) {
      // Dispatch login action
      dispatch(login(formData.email, formData.password));
    } else {
      // Dispatch register action
      if(cpassword== formData.password){
      dispatch(register(formData));
      }
      else{
        window.alert("password not match");
        window.location.reload();
      }
    }
  };

  if (isAuthenticated) {
    return  navigate('/card');
  }

  return (
    <div className="auth-container">
     {isForgotPassword ? (
        <ForgotPassword />
      ) : (
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
           {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={cpassword}
            onChange={handlecpassword}
          />)}
        {isLogin && (
          <p className="forgot-link" onClick={toggleForgotPassword} >Forgot Password?</p>
        )}
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : isLogin ? "Login" : "Register"}
        </button>
        <p onClick={toggleForm} className="toggle-link">
          {isLogin ? "Need to register?" : "Already registered? Login"}
        </p>
        {error && <p className="error-message">{error}</p>}
        {isAuthenticated && <p className="success-message">Logged in successfully!</p>}
      </div>)}
    </div>
  );
};

export default AuthPage;
