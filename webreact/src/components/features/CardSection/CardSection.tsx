import React, { FC, useEffect, useState } from 'react';
import './CardSection.css';
import ViewAllButton from '../../shared/ViewAllButton/ViewAllButton';
import ViewMoreButton from '../../shared/ViewMoreButton/ViewMoreButton';
import ItemCardCatalog from '../../entities/ItemCardCatalog/ItemCardCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store.config';
import { getLamps } from '../../../store/lampSlice';
import Loader from "../../shared/Loader/Loader";

const CardSection: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [visibleCount, setVisibleCount] = useState<number>(8);

    const { lamp: lamps, status } = useSelector((state: RootState) => state.lampReducer);

    useEffect(() => {
        dispatch(getLamps({
            search: '',
            sortManufacturer: '',
            filterPower: '',
            filterPrice: '',
            filterIsEconomical: ''
        }));
    }, [dispatch]);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    return (
        <section className="cardSection">
            {status === 'pending' && <Loader/>}
            {status === 'rejected' && <p>Failed to load lamps.</p>}
            {status === 'fulfilled' && lamps && (
                <>
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
                        {visibleCount < lamps.length && (
                            <ViewMoreButton onClick={handleShowMore} />
                        )}
                        <ViewAllButton />
                    </div>
                </>
            )}
        </section>
    );
};

export default CardSection;
