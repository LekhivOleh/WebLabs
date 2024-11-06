import React, { FC, useState } from 'react';
import './CardSection.css';
import ItemCard from '../../entities/ItemCard/ItemCard';
import { Lamp } from '../../../assets/utils/lamp';
import ViewAllButton from "../../shared/ViewAllButton/ViewAllButton";
import ViewMoreButton from "../../shared/ViewMoreButton/ViewMoreButton";
import ItemCardCatalog from "../../entities/ItemCardCatalog/ItemCardCatalog";

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
                    <ItemCardCatalog
                        key={card.id}
                        id={card.id}
                        manufacturer={card.manufacturer}
                        power={card.power}
                        amountOfLamps={card.amountOfLamps}
                    />
                ))}
            </ul>
            <div className="card_section_buttons">
                <ViewMoreButton onClick={showMoreItems}/>
                <ViewAllButton/>
            </div>
        </section>
    );
};

export default CardSection;