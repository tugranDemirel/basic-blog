import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [err, setErr] = useState(null)
    const nagivate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axios.post('auth/register',inputs)
            nagivate('/login')
        }catch (e) {
            setErr(e.response.data)
        }
    }
    return (
        <div className="auth">
            <h1>Kayıt Olun</h1>
            <form action="">
                <input required type="text" placeholder="Kullanıcı Adınız" name="name" onChange={handleChange}/>
                <input required type="email" placeholder="Email Adresiniz" name="email" onChange={handleChange}/>
                <input required type="password" placeholder="Şifreniz" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Kayıt Ol</button>
                { err && <p>{err}</p>}
                <span> Hesabınız var mı? <Link to="/login">Giriş yapın.</Link></span>
            </form>
        </div>
    )
};

export default Register;