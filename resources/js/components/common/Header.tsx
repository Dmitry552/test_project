import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Menu from "../HeaderMenu/Menu";
import '../../styles/header.scss';
// import { useHistory } from "react-router-dom";

import logo from '../../images/logo.svg';
import iconUser from '../../images/icons/Icon.svg';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate("/");
    }

    return (
        <div className='header'>
            <div className="header__logo">
                <img onClick={handlerClick} src={logo} alt="logo"/>
            </div>
            <div className="header__block">
                <div className='header__block__menu'>
                    <nav className='header__block__menu__nav'>
                        <ul>
                            <li><NavLink to='#'>Preisen</NavLink></li>
                            <li><NavLink to='#'>HR-Magazin</NavLink></li>
                            <li><NavLink to='#'>Hilfe - Center</NavLink></li>
                        </ul>

                    </nav>
                </div>
                <div className='header__block__login'>
                    <button className='header__block__login__announcement'>Anzeige schalten</button>
                    <button className='header__block__login__login'>
                        <img src={iconUser} alt="icon_user"/>
                        Login
                    </button>
                </div>
            </div>
            <div className='header__burger_menu'>
                <Menu />
            </div>
        </div>
    );
}

export default Header;
