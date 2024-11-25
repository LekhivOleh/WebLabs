import React, { FC, useEffect } from 'react';
import './CatalogSection.css';
import ItemCardCatalog from '../../entities/ItemCardCatalog/ItemCardCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store.config';
import { getLamps } from '../../../store/lampSlice';
import Loader from '../../shared/Loader/Loader';

const CatalogItemSection: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
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

    return (
        <section className="catalogItemSection">
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <p>Failed to load items. Please try again later.</p>}
            {status === 'fulfilled' && lamps && (
                <ul className="cards">
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
            )}
        </section>
    );
};

export default CatalogItemSection;
