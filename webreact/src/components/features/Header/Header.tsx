import React from 'react';
import "./Header.css";
import Logo from "./assets/images/logo.svg";
import NavigationLink from "../../shared/NavigationLink/NavigationLink";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store.config";
import {logout} from "../../../store/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((state: RootState) => state.authReducer.isLogged);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    }

    return (
        <header>
            <img className="header_logo" src={Logo} alt="poco" />
            <ul className="nav_ul">
                <NavigationLink link="/" name="Home"/>
                <NavigationLink link="/catalog" name="Catalog" />
                <NavigationLink link="/cart" name="Cart" />
            </ul>
            {isLogged && (
                <button className="logout_button" onClick={handleLogout}>Logout</button>
            )}
        </header>
    );
};

export default Header;