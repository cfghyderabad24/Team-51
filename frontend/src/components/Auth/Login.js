import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  './css/Login.css';  

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    //const [role, setRole] = useState(""); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();  
        
        try {
            let response;
            let resp = await axios.post('http://localhost:4000/user-api/login', {  email, password});
            console.log(resp.data.user);
            console.log(resp);
            switch(resp.data.user.role) {
                

                case 'Faculty':
                    response = await axios.post('http://localhost:4000/faculty-api/login', {  email, password,});
                    break;
                case 'Student':
                    console.log('hi')
                    response = await axios.post('http://localhost:4000/student-api/login', {  email, password});
                    break;
                case 'NGO':
                    response = await axios.post('http://localhost:4000/ngo-api/login', {  email, password});
                    break;
                case 'Govt':
                    response = await axios.post('http://localhost:4000/govt-api/login', {  email, password});
                    break;
                case 'Parents':
                    response = await axios.post('http://localhost:4000/parent-api/login', {  email, password});
                    break;
                case 'CSR':
                    response = await axios.post('http://localhost:4000/csr-api/login', {  email, password });
                    break;
                default:
                    setMessage("Invalid role selected");
                    return;
            }
            setMessage(response.data.message);
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Error during registration: ' + (error.response?.data?.message || error.message));
        }
    };
    

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    {/* <select id="role" className='dropdown' value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="" className='dropdown'>Select Role</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="NGO">NGO</option>
                        <option value="Govt">Govt</option>
                        <option value="Parents">Parents</option>
                        <option value="CSR">CSR</option>
                    </select> */}
                    <button type="submit">Login</button>
                </form>
                {message && <p className="error">{message}</p>}
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                <button className='btn btn-success' onClick={() => {
              navigate("/forgot");
            }}>Forget Password</button>
            </div>
        </div>
    );
}

export default Login;