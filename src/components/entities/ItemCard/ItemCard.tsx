import React, {FC} from 'react';
import {Lamp} from '../../../assets/utils/Lamp'
import NoImage from "../../../assets/images/no_image.svg";


const ItemCard:FC<Lamp> = (props) => {


    return (
        <li className={"delete_this_shi"}>
            <img src={NoImage} className="item-container_image" alt="card"/>
            <div className="card-body">
                <div className="card_info">
                    <h5 className="abc">{props.manufacturer}</h5>
                    <p className="card-text">Power: {props.power}w, lamps: {props.amountOfLamps}pcs.</p>
                </div>
            </div>
        </li>
    );
};

export default ItemCard;