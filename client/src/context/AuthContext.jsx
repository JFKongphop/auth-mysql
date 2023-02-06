import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (loginData) => {
        const res = await axios.post('http://localhost:8800/api/auth/login', loginData);
        console.log(res.data);
        setCurrentUser(res.data.user);
        localStorage.setItem('token', res.data.token)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, currentUser);


    const contextData = {
        user: currentUser,
        onLogin: login
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}