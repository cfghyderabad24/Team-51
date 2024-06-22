import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Signup.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number , setNumber] = useState("");
    const [role, setRole] = useState(""); // No default value
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!role) {
            setMessage("Please select a role");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', { name, email, password });
            setMessage(response.data.message);
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Error during registration: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="signup-container ">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text1"
                        placeholder="Enter  Your NUmber"
                        id="text1"
                        // value={}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /> 
                    <select id="role" className='dropdown' value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="" className='dropdown'>Select Role</option>
                        {/* <option value="Student">Student</option> */}
                        <option value="Admin">Admin</option>
                        <option value="Faculty">Faculty</option>
                        <option value="NGO">NGO</option>
                        <option value="Govt">Govt</option> 
                        <option value="Parents">Parents</option>
                        <option value="CSR">CSR</option>
                    </select>
                    <select id="role" className='dropdown' value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="" className='dropdown'>Interests</option>
                        {/* <option value="Student">Student</option> */}
                        <option value="Program-CodingToy">Program-CodingToy</option>
                        <option value="Faculty">Faculty</option>
                        <option value="NGO">NGO</option>
                        <option value="Govt">Govt</option> 
                        <option value="Parents">Parents</option>
                        <option value="CSR">CSR</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
                {message && <p className="error">{message}</p>}
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;