import React, {useState} from 'react';
import BurgerButton from "./BurgerButton";
import {NavLink} from "react-router-dom";
import iconUser from "../../images/icons/Icon.svg";
import '../../styles/DropDownMenu/burgerMenu.scss';

const Menu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleShowMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    return (
        <div className="menu">
            <BurgerButton show={showMenu} onClick={handleShowMenu}/>
            <div
                className={showMenu ? "menu__block active" : "menu__block"}
            >
                <nav className='menu__block__nav'>
                    <ul>
                        <li><NavLink to='#'>Preisen</NavLink></li>
                        <li><NavLink to='#'>HR-Magazin</NavLink></li>
                        <li><NavLink to='#'>Hilfe - Center</NavLink></li>
                    </ul>
                </nav>
                <button className='menu__block__announcement'>Anzeige schalten</button>
                <button className='menu__block__login'>
                    <img src={iconUser} alt="icon_user"/>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Menu;
