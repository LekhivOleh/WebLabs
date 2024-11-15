import React from 'react';
import './SearchInput.css';
import {SearchOptions} from "../../../assets/utils/SearchOptions";

interface SearchInputProps {
    searchOptions: SearchOptions;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchOptions, onChange }) => {
    console.log('searchOptions:', searchOptions);
    return <input type="text" className="search_input" value={searchOptions.search} onChange={onChange} />;
};

export default SearchInput;
