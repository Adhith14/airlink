import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

export const Login = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Get history object for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Logging in with email:", email);
      // Make a POST request to your backend user endpoint to authenticate the user
      const response = await axios.get(`http://localhost:8080/user/${email}`);
      console.log("Login response:", response);

      if (response.status === 200 && response.data.length > 0) {
        // Successful authentication, redirect using navigate
        navigate('/book');
      } else {
        // Handle authentication failure
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Login error:", error);
      setError('An error occurred while processing your request. Please try again later.');
    }
  }

  return (
    <div className="logreg-form">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="logreg-label" htmlFor="email">Email</label>
          <input className="logreg-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label className="logreg-label" htmlFor="password">Password</label>
          <input className="logreg-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button className="logreg-btn" type="submit">Log In</button>
        </form>
        {error && <p className="error-msg">{error}</p>}
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
    </div>
  )
}





