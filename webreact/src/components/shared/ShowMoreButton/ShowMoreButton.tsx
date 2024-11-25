import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import "./ShowMoreButton.css";

interface ShowMoreButtonProps {
    cardId: string;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ cardId }) => {
    return (
        <Link className="show_more_button" id={cardId} to={`/item/${cardId}`}>Show more</Link>
    );
};

export default ShowMoreButton;