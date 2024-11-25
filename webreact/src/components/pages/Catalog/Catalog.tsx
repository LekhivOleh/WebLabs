import React, { useState, FC } from 'react';
import FilterSearchSection from '../../features/FilterSearchSection/FilterSearchSection';
import CardSection from "../../features/CardSection/CardSection";
import AddItemButton from '../../shared/AddItemButton/AddItemButton';
import AddItemForm from '../../shared/AddItemForm/AddItemForm';
import CatalogItemSection from "../../features/CatalogSection/CatalogItemSection";

const Catalog: FC = () => {
    return (
        <>
            <FilterSearchSection />
            <CatalogItemSection />
        </>
    );
};

export default Catalog;
