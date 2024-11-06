import React, { FC } from 'react';
import './ItemCardCatalog.css';
import NoImage from "../../../assets/images/no_image.svg";
import ShowMoreButton from "../../shared/ShowMoreButton/ShowMoreButton";

interface ItemCardCatalogProps {
    id: string;
    manufacturer: string;
    power: number;
    amountOfLamps: number;
}

const ItemCardCatalog: FC<ItemCardCatalogProps> = ({ id, manufacturer, power, amountOfLamps }) => {

    return (
        <li className={"delete_this_shi"}>
            <img src={NoImage} className="item-container_image" alt="card"/>
            <div className="card-body">
                <div className="card_info">
                    <h5 className="abc">{manufacturer}</h5>
                    <p className="card-text">Power: {power}w, lamps: {amountOfLamps}pcs.</p>
                </div>
                <div className="buttons-container-catalog">
                    <ShowMoreButton cardId={id}></ShowMoreButton>
                </div>
            </div>
        </li>
    );
};

export default ItemCardCatalog;