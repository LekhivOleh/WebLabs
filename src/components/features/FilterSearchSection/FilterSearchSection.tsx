import React, { useState, useEffect } from 'react';
import './FilterSearchSection.css';
import SelectComponent from '../../shared/Select/Select';
import SearchInput from '../../shared/SearchInput/SearchInput';
import SubmitButton from '../../shared/SubmitButton/SubmitButton';
import { lamps } from '../../../assets/utils/lamp';

interface FilterSearchSectionProps {
    onFilterChange: (filters: { manufacturer: string; color: string; search: string }) => void;
}

const FilterSearchSection: React.FC<FilterSearchSectionProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({ manufacturer: '', color: '', search: '' });

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        const normalizedValue = (name === 'manufacturer' && value === 'All manufacturers') ? '' : value;
        const newFilters = { ...filters, [name]: normalizedValue };
        if (name === 'color' && value === 'All colors') {
            newFilters.color = '';
        }
        if (name === 'manufacturer' && value === 'All manufacturers') {
            newFilters.manufacturer = '';
        }
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFilters = { ...filters, search: event.target.value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onFilterChange(filters);
    };

    const uniqueOptions = (key: 'manufacturer' | 'color') =>
        Array.from(new Set(lamps.map(lamp => lamp[key])));

    return (
        <form className={'filter_and_search'} onSubmit={handleSubmit}>
            <div className={'filters'}>
                <SelectComponent
                    className={`filter_1`}
                    name="manufacturer"
                    options={['All manufacturers', ...uniqueOptions('manufacturer')]}
                    onChange={handleFilterChange}
                    value={filters.manufacturer}
                />
                <SelectComponent
                    className={`filter_2`}
                    name="color"
                    options={['All colors', ...uniqueOptions('color')]}
                    onChange={handleFilterChange}
                    value={filters.color}
                />
            </div>
            <div className={'search_and_apply'}>
                <SearchInput value={filters.search} onChange={handleSearchChange} />
                <SubmitButton />
            </div>
        </form>
    );
};

export default FilterSearchSection;