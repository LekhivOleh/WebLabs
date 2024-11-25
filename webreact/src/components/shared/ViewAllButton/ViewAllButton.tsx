import React from 'react';
import { Link } from 'react-router-dom';
import ButtonArrow from '../../features/CardSection/assets/images/button_arrow.svg';
import './ViewAllButton.css';

const ViewAllButton = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link to="/catalog" className="view_all_button" onClick={handleClick}>
            View all <img src={ButtonArrow} alt="" />
        </Link>
    );
};

export default ViewAllButton;