import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="auth">
            <h1>Kayıt Olun</h1>
            <form action="">
                <input required type="text" placeholder="Kullanıcı Adınız"/>
                <input required type="email" placeholder="Email Adresiniz"/>
                <input required type="password" placeholder="Şifreniz"/>
                <button>Kayıt Ol</button>
                <p>Eroor message</p>
                <span> Hesabınız var mı? <Link to="/login">Giriş yapın.</Link></span>
            </form>
        </div>
    )
};

export default Register;