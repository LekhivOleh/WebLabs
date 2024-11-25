import React, { FC } from 'react';
import "./ViewMoreButton.css";

interface ViewMoreButtonProps {
    onClick: () => void;
}

const ViewMoreButton: FC<ViewMoreButtonProps> = ({ onClick }) => {
    return (
        <button className="view_more_button" onClick={onClick}>Show more</button>
    );
};

export default ViewMoreButton;