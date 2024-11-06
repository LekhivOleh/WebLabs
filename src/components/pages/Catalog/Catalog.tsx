import React, { useState } from 'react';
import CatalogItemSection from '../../features/CatalogSection/CatalogItemSection';
import FilterSearchSection from "../../features/FilterSearchSection/FilterSearchSection";
import { LampProvider } from '../../../assets/utils/LampProvider';

const Catalog: React.FC = () => {
    const [filters, setFilters] = useState({ manufacturer: '', color: '', search: '' });

    const handleFilterChange = (newFilters: { manufacturer: string; color: string; search: string }) => {
        setFilters(newFilters);
    };

    return (
        <LampProvider>
            <FilterSearchSection onFilterChange={handleFilterChange} />
            <CatalogItemSection filters={filters} />
        </LampProvider>
    );
};

export default Catalog;