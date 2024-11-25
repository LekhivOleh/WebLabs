import React from 'react';

interface SelectProps {
    className: string;
    name: string;
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const SelectComponent: React.FC<SelectProps> = ({ className, name, options, onChange, value }) => {
    return (
        <select className={className} name={name} onChange={onChange} value={value}>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectComponent;