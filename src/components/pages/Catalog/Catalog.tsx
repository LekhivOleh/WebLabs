import React, { useState, useEffect, FC } from 'react';
import FilterSearchSection from '../../features/FilterSearchSection/FilterSearchSection';
import CatalogItemSection from "../../features/CatalogSection/CatalogItemSection";
import LampService from '../../../services/LampService';
import { SearchOptions } from '../../../assets/utils/SearchOptions';
import { LampDto } from '../../../assets/utils/LampDto';
import AddItemButton from '../../shared/AddItemButton/AddItemButton';
import AddItemForm from '../../shared/AddItemForm/AddItemForm';
import Loader from '../../shared/Loader/Loader';

const Catalog: FC = () => {
    const [lamps, setLamps] = useState<LampDto[]>([]);
    const [searchOptions, setSearchOptions] = useState<SearchOptions>({
        search: '',
        sortManufacturer: '',
        filterPower: '',
        filterPrice: '',
        filterIsEconomical: ''
    });
    const [showAddForm, setShowAddForm] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLamps = async () => {
            setLoading(true);
            try {
                const response = await LampService.getLamps(searchOptions);
                setLamps(response.data);
            } catch (error) {
                console.error('Error fetching lamps:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLamps();
    }, [searchOptions]);


    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <>
            <FilterSearchSection setSearchOptions={setSearchOptions} searchOptions={searchOptions} />
            {loading ? <Loader /> : <CatalogItemSection lamps={lamps} searchOptions={searchOptions} />}
            <AddItemButton onClick={toggleAddForm} />
            {showAddForm && <AddItemForm />}
        </>
    );
};

export default Catalog;