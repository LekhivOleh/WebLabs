import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoBackButton.css';

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button onClick={handleGoBack} className="go_back_button">Go back</button>
    );
};

export default GoBackButton;