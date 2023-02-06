import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import './login.scss';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {

    const navigate = useNavigate();
    const { onLogin } = useContext(AuthContext);

    const [error, setError] = useState(null)
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const loginChangeHandler = (event) => {
        setLoginData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            await onLogin(loginData);
            navigate('/');
        }
        catch (err) {
            console.log(err);
            setError(err.response.data);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }


    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello world</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad 
                        ducimus, accusamus maiores ab deleniti quisquam amet optio.
                        Amet, nisi esse officiis sequi vel optio nesciunt debitis
                        laudantium, minus, cumque quae
                    </p>
                    <span>Don't you have account</span>
                    <Link to='/register'><button>Register</button></Link>
                    
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder='Username'
                            name='username'
                            onChange={loginChangeHandler}
                        />
                        <input 
                            type="password" 
                            placeholder='Password'
                            name='password'
                            onChange={loginChangeHandler}
                        />
                        {error && error}
                        <button onClick={loginHandler}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login