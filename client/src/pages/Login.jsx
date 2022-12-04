import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="auth">
            <h1>Giriş Yap</h1>
            <form action="">
                <input required type="text" placeholder="Kullanıcı Adınız"/>
                <input required type="password" placeholder="Şifreniz"/>
                <button>Giriş Yap</button>
                <p>Eroor message</p>
                <span> Hesabınız yok mu? <Link to="/register">Hemen kayıt olun.</Link></span>
            </form>
        </div>
    )
};

export default Login;