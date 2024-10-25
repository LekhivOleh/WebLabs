import React, { FC } from 'react';
import "./ShowMoreButton.css";

interface ShowMoreButtonProps {
    onClick: () => void;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ onClick }) => {
    return (
        <button className="show_more_button" onClick={onClick}>Show more</button>
    );
};

export default ShowMoreButton;