import React from 'react';
import CatalogItemSection from '../../features/CatalogSection/CatalogItemSection';
import FilterSearchSection from "../../features/FilterSearchSection/FilterSearchSection";
import LampProvider from '../../../assets/utils/LampProvider';

const Catalog = () => {
    return (
        <LampProvider>
            <FilterSearchSection/>
            <CatalogItemSection/>
        </LampProvider>
    );
};

export default Catalog;