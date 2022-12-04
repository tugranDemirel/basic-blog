import * as React from "react";
import Logo from "../img/logo.png"
import {Link} from "react-router-dom";
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>Sanat</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>Bilim</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>Teknoloji</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>Sinema</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>Dizayn</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>Yiyecek</h6>
                    </Link>
                    <span>Tuğran</span>
                    <span>Çıkış</span>
                    <span className="write">
                        <Link className="link" to="/write">Yeni</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Navbar