import React, { useEffect, useState } from 'react';
import './CatalogSection.css';
import ItemCardCatalog from '../../entities/ItemCardCatalog/ItemCardCatalog';
import { useLamps } from '../../../assets/utils/LampProvider';

interface Filters {
    manufacturer: string;
    color: string;
    search: string;
}

interface CatalogItemSectionProps {
    filters: Filters;
}

const CatalogItemSection: React.FC<CatalogItemSectionProps> = ({ filters }) => {
    const lamps = useLamps();
    const [filteredLamps, setFilteredLamps] = useState(lamps);

    useEffect(() => {
        const normalizedSearch = filters.search.toLowerCase().trim();

        const newFilteredLamps = lamps.filter(lamp => {
            return (!filters.manufacturer || lamp.manufacturer === filters.manufacturer) &&
                (!filters.color || lamp.color === filters.color) &&
                (lamp.manufacturer.toLowerCase().includes(normalizedSearch) ||
                    lamp.power.toString().includes(normalizedSearch) ||
                    lamp.amountOfLamps.toString().includes(normalizedSearch));
        });

        setFilteredLamps(newFilteredLamps);
    }, [filters, lamps]);

    return (
        <section className="catalogItemSection">
            <ul className="cards">
                {filteredLamps.map(lamp => (
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