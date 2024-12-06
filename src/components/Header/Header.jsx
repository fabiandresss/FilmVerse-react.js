import React from 'react';
import './Header.css';
import logo from '../../assets/FILMVERSE.png'
import user_img from '../../assets/user.png'


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo" src={logo} alt="Logo"/>
            </div>
            <nav className="nav">
                <ul className="nav_elements">
                    <li><a>INICIO</a></li>
                    <li><a>SERIES</a></li>
                    <li><a>PELÍCULAS</a></li>
                    <li><a>NUEVAS</a></li>
                    <li><a>TENDENCIAS</a></li>
                </ul>
            </nav>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Buscar..." />
            </div>
            <div>
                <img className="user_img" src={user_img} alt="User"/>
            </div>
        </header>
    )
}

export default Header;