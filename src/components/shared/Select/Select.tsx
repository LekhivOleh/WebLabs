import React from 'react';

interface SelectProps {
    options: string[];
    className: string;
}

const SelectComponent: React.FC<SelectProps> = ({ options, className }) => {
    return (
        <select className={className}>
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    );
};

export default SelectComponent;