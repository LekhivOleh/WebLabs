import React from 'react';
import './CatalogSection.css';
import ItemCardCatalog from '../../entities/ItemCardCatalog/ItemCardCatalog';
import { LampDto } from '../../../assets/utils/LampDto';
import {SearchOptions} from "../../../assets/utils/SearchOptions";

interface CatalogItemSectionProps {
    lamps: LampDto[];
    searchOptions: SearchOptions;
}

const CatalogItemSection: React.FC<CatalogItemSectionProps> = ({ lamps, searchOptions }) => {
    return (
        <section className="catalogItemSection">
            <ul className="cards">
                {lamps.map(lamp => (
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