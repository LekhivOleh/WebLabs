import React from 'react';
import './FilterSearchSection.css';
import SelectComponent from '../../shared/Select/Select';
import SearchInput from '../../shared/SearchInput/SearchInput';
import { SearchOptions } from "../../../assets/utils/SearchOptions";

interface FilterSearchSectionProps {
    setSearchOptions: (searchOptions: SearchOptions) => void;
    searchOptions: SearchOptions;
}

const FilterSearchSection: React.FC<FilterSearchSectionProps> = ({ setSearchOptions, searchOptions }) => {
    return (
        <div className="filter_and_search">
            <div className="filters">
                <SelectComponent
                    className="filter_1"
                    name="sortManufacturer"
                    options={['Manufacturers', 'manufacturers increasing', 'manufacturers decreasing']}
                    onChange={(event) => setSearchOptions({ ...searchOptions, sortManufacturer: event.target.value })}
                    value={searchOptions.sortManufacturer}
                />
                <SelectComponent
                    className="filter_2"
                    name="filterPower"
                    options={['Power', '0 - 499', '500 - 999', '1000 - 1501', '1500 - 2001', '2000+']}
                    onChange={(event) => setSearchOptions({ ...searchOptions, filterPower: event.target.value })}
                    value={searchOptions.filterPower}
                />
                <SelectComponent
                    className="filter_3"
                    name="filterPrice"
                    options={['Price', '0 - 499', '500 - 999', '1000 - 1501', '1500 - 2001', '2000+']}
                    onChange={(event) => setSearchOptions({ ...searchOptions, filterPrice: event.target.value })}
                    value={searchOptions.filterPrice}
                />
                <SelectComponent
                    className="filter_4"
                    name="filterIsEconomical"
                    options={['Eco?', 'true', 'false']}
                    onChange={(event) => setSearchOptions({ ...searchOptions, filterIsEconomical: event.target.value })}
                    value={searchOptions.filterIsEconomical}
                />
            </div>
            <div className="search_and_apply">
                <SearchInput searchOptions={searchOptions} onChange={event => setSearchOptions({ ...searchOptions, search: event.target.value})} />
            </div>
        </div>
    );
};

export default FilterSearchSection;