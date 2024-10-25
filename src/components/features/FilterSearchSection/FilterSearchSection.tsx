import React, {useContext} from 'react';
import './FilterSearchSection.css';
import SelectComponent from '../../shared/Select/Select'
import SearchInput from "../../shared/SearchInput/SearchInput";
import SubmitButton from "../../shared/SubmitButton/SubmitButton";

const FilterSearchSection = () => { // prevent default on submit
    const MyContext = React.createContext('something');
    const contextValue = useContext(MyContext);

    return (
        <form className={'filter_and_search'}>
            <div className={'filters'}>
                <SelectComponent className={`${contextValue}`} options={['Filter_11', 'Filter_12']} />
                <SelectComponent className={'filter_2'} options={['Filter_21', 'Filter_22']} />
                <SelectComponent className={'filter_3'} options={['Filter_31', 'Filter_32']} />
            </div>
            <div className={'search_and_apply'}>
                <SearchInput/>
                <SubmitButton/>
            </div>
        </form>
    );
};

export default FilterSearchSection;