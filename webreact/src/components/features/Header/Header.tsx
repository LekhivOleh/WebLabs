import React from 'react';
import "./Header.css";
import Logo from "./assets/images/logo.svg";
import NavigationLink from "../../shared/NavigationLink/NavigationLink";

const Header = () => {
    return (
        <header>
            <img className="header_logo" src={Logo} alt="poco" />
            <ul className="nav_ul">
                <NavigationLink link="/" name="Home"/>
                <NavigationLink link="/catalog" name="Catalog" />
                <NavigationLink link="/cart" name="Cart" />
            </ul>
        </header>
    );
};

export default Header;