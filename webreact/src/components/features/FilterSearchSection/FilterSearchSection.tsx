import React from 'react';
import './FilterSearchSection.css';
import SelectComponent from '../../shared/Select/Select';
import SearchInput from '../../shared/SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchOptions, getLamps } from '../../../store/lampSlice';
import { RootState, AppDispatch } from '../../../store/store.config';

const FilterSearchSection: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchOptions = useSelector((state: RootState) => state.lampReducer.searchOptions);

    const handleFilterChange = (name: string, value: string) => {
        const updatedOptions = { ...searchOptions, [name]: value };
        dispatch(setSearchOptions(updatedOptions));
        dispatch(getLamps(updatedOptions));
    };

    return (
        <div className="filter_and_search">
            <div className="filters">
                <SelectComponent
                    className="filter_1"
                    name="sortManufacturer"
                    options={['Manufacturers', 'manufacturers increasing', 'manufacturers decreasing']}
                    onChange={(event) => handleFilterChange('sortManufacturer', event.target.value)}
                    value={searchOptions.sortManufacturer}
                />
                <SelectComponent
                    className="filter_2"
                    name="filterPower"
                    options={['Power', '0 - 499', '500 - 999', '1000 - 1501', '1500 - 2001', '2000+']}
                    onChange={(event) => handleFilterChange('filterPower', event.target.value)}
                    value={searchOptions.filterPower}
                />
                <SelectComponent
                    className="filter_3"
                    name="filterPrice"
                    options={['Price', '0 - 499', '500 - 999', '1000 - 1501', '1500 - 2001', '2000+']}
                    onChange={(event) => handleFilterChange('filterPrice', event.target.value)}
                    value={searchOptions.filterPrice}
                />
                <SelectComponent
                    className="filter_4"
                    name="filterIsEconomical"
                    options={['Eco?', 'true', 'false']}
                    onChange={(event) => handleFilterChange('filterIsEconomical', event.target.value)}
                    value={searchOptions.filterIsEconomical}
                />
            </div>
            <div className="search_and_apply">
                <SearchInput
                    searchOptions={searchOptions}
                    onChange={(event) => handleFilterChange('search', event.target.value)}
                />
            </div>
        </div>
    );
};

export default FilterSearchSection;
