import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        name: "",
        password: ""
    })

    const [err, setErr] = useState(null)
    const nagivate = useNavigate()
    const { login }  = useContext(AuthContext)

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await login(inputs)
            nagivate('/')
        }catch (e) {
            setErr(e.response.data)
        }
    }
    return (
        <div className="auth">
            <h1>Giriş Yap</h1>
            <form action="">
                <input required type="text" placeholder="Kullanıcı Adınız" name="username" onChange={handleChange}/>
                <input required type="password" placeholder="Şifreniz" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Giriş Yap</button>
                { err && <p>{ err }</p>}
                <span> Hesabınız yok mu? <Link to="/register">Hemen kayıt olun.</Link></span>
            </form>
        </div>
    )
};

export default Login;