import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import "./NavigationLink.css";

interface NavigationLinkProps{
    link: string,
    name: string,
}

const NavigationLink:FC<NavigationLinkProps> = (props) => {
    return (
        <li>
            <NavLink to={props.link} className={({ isActive }) => `nav_link ${isActive ? 'active' : 'not_active'}`}>{props.name}</NavLink>
        </li>
    );
};

export default NavigationLink;
