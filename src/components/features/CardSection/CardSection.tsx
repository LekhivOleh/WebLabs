import React, {FC, useCallback, useEffect, useState} from 'react';
import './CardSection.css';
import ViewAllButton from "../../shared/ViewAllButton/ViewAllButton";
import ViewMoreButton from "../../shared/ViewMoreButton/ViewMoreButton";
import ItemCardCatalog from "../../entities/ItemCardCatalog/ItemCardCatalog";
import LampService from '../../../services/LampService';
import { SearchOptions } from '../../../assets/utils/SearchOptions';
import {LampDto} from "../../../assets/utils/LampDto";

interface cardSectionProps {
    lamps: LampDto[];
    setLamps: (lamps: LampDto[]) => void;
}

const CardSection: FC<cardSectionProps> = ({lamps, setLamps}) => {
    const [visibleCount, setVisibleCount] = useState<number>(8);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    }

    const fetchLamps = useCallback(async () => {
        const options: SearchOptions = {
            search: '',
            sortManufacturer: '',
            filterPower: '',
            filterPrice: '',
            filterIsEconomical: ''
        };
        const { data } = await LampService.getLamps(options);
        setLamps(data);
    }, [])

    useEffect(() => {
        fetchLamps();
    }, [fetchLamps]);

    return (
        <section className="cardSection">
            <ul className="cards">
                {lamps.slice(0, visibleCount).map((lamp) => (
                    <ItemCardCatalog
                        key={lamp.id}
                        id={lamp.id}
                        manufacturer={lamp.manufacturer}
                        power={lamp.power}
                        amountOfLamps={lamp.amountOfLamps}
                    />
                ))}
            </ul>
            <div className="card_section_buttons">
                <ViewMoreButton onClick={handleShowMore}/>
                <ViewAllButton/>
            </div>
        </section>
    );
};

export default CardSection;