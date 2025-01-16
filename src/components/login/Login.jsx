import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../redux/feature/auth/authApi';
import { saveUserToLocalStorage, setUser } from '../../redux/feature/auth/authSlice';

const Login = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation();
    const navigate = useNavigate();



    const handleLogin = async (e) =>{
        e.preventDefault();

        if (!email || !password) {
            setMessage('Both fields are required');
            return;
        }

        const data = { email, password };
        try {
            const response = await loginUser(data).unwrap();
            const { token, user } = response;
            alert('Login successful');
            navigate('/');
            // Store token/user if necessary
            dispatch(setUser( user ));
            saveUserToLocalStorage(user); 
            console.log("Saving user to localStorage:", user);
        } catch (error) {
            setMessage(error.data?.message || 'Please provide a valid email and password');
        }
    }; 

    const onChangeEmail = (e)=>{
        setEmail(e.target.value);
        setMessage('');
    };

    const onChangePassword = (e)=>{
        setPassword(e.target.value);
        setMessage('');
    };

  return (
    <div className='login'>
        <h1>Please Login</h1>
        <form onSubmit={handleLogin}  className='login-content'>
            <input type="email" placeholder='Email Address' 
            value={email} required 
            onChange={onChangeEmail} />
            <input type="password" placeholder='Password' 
            value={password} required 
            onChange={onChangePassword} />
            {
                message && <p className='error-message'>{message}</p>
            }
            <button type='submit' disabled = {loginLoading}>{loginLoading? 'Logging in...' : 'Login'}</button>
        </form>
        <div className="login-bottom">
            <p>Don't have an account? <Link to="/register" className='login-register-link'>Register</Link> here </p>
        </div>
    </div>
  )
}

export default Login