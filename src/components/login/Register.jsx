import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/feature/auth/authApi';

const Register = () => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registerUser, {isLoading}] = useRegisterUserMutation();
    const navigate = useNavigate();

    const handleRegister = async (e) =>{
        e.preventDefault();
        const data = {
            username,
            email,
            password
        };
        try {
            await registerUser(data).unwrap();
            alert('Registration successful. Please login now.');
            navigate('/login');
        } catch (error) {
            setMessage('Failed to register')
            alert('Registration failed')
        }
    }
  return (
    <div className='login'>
        <h2>Please Register</h2>
        <form onSubmit={handleRegister} action="" className='login-content'>
            <input type="username" placeholder='Username' 
            value={username} required 
            onChange={(e)=> setUsername(e.target.value)} />
            <input type="email" placeholder='Email Address' 
            value={email} required 
            onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='Password' 
            value={password} required 
            onChange={(e)=> setPassword(e.target.value)} />
            {
                message && <p className='error-message'>{message}</p>
            }
            <button type='submit'>Register</button>
        </form>
        <div className="login-bottom">
            <p>Already have an account? Please <Link to="/login" className='login-register-link'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register