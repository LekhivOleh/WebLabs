import React from 'react';
import { useLamps } from '../../../assets/utils/lamp';
import './CatalogSection.css';
import ItemCardCatalog from '../../entities/ItemCardCatalog/ItemCardCatalog';

const CatalogItemSection = () => {
    const lamps = useLamps();

    return (
        <section className="catalogSection">
            <ul className="catalog">
                {lamps.map((lamp) => (
                    <ItemCardCatalog
                        key={lamp.id}
                        id={lamp.id}
                        manufacturer={lamp.manufacturer}
                        power={lamp.power}
                        amountOfLamps={lamp.amountOfLamps}
                    />
                ))}
            </ul>
        </section>
    );
};

export default CatalogItemSection;