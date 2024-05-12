import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate(); // Get navigate function for redirection

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user', {
                username: name,
                email: email,
                password: pass
            });
            console.log(response.data); // Handle response if needed
            // Redirect to '/book' after successful registration
            navigate('/book');
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error, show error message, etc.
        }
    }

    return (
        <div className="logreg-form">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form">
                    <label className="logreg-label" htmlFor="name">Full name</label>
                    <input className="logreg-input" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label className="logreg-label" htmlFor="email">email</label>
                    <input className="logreg-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className="logreg-label" htmlFor="password">password</label>
                    <input className="logreg-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="logreg-btn" type="button" onClick={handleSubmit}>Register</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}
