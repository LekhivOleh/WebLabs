import React, { FC, useState } from 'react';
import './CardSection.css';
import ItemCard from '../../entities/ItemCard/ItemCard';
import { Lamp } from '../../../assets/utils/lamp';
import ViewAllButton from "../../shared/ViewAllButton/ViewAllButton";
import ShowMoreButton from "../../shared/ShowMoreButton/ShowMoreButton";

interface CardsProps {
    cards: Array<Lamp>;
}

const CardSection: FC<CardsProps> = ({ cards }) => {
    const [visibleCount, setVisibleCount] = useState(8);

    const showMoreItems = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <section className="cardSection">
            <ul className="cards">
                {cards.slice(0, visibleCount).map((card) => (
                    <ItemCard
                        key={card.id} // Ensure unique key for each card
                        id={card.id}
                        manufacturer={card.manufacturer}
                        power={card.power}
                        amountOfLamps={card.amountOfLamps}
                    />
                ))}
            </ul>
            <div className="card_section_buttons">
                <ShowMoreButton onClick={showMoreItems} />
                <ViewAllButton />
            </div>
        </section>
    );
};

export default CardSection;