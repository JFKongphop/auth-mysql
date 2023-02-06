import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';


const Login = () => {
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
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login