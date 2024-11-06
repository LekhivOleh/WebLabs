import React from 'react';
import './SearchInput.css';

interface SearchInputProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return <input type="text" className={'search_input'} value={value} onChange={onChange} />;
};

export default SearchInput;