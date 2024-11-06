import React, { FC } from 'react';

interface SelectAmountProps {
    className?: string;
    amount: number;
    setAmount: (amount: number) => void;
}

const SelectAmount: FC<SelectAmountProps> = ({ className, amount, setAmount }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    return (
        <input type="number" min="1" value={amount} className={className} onChange={handleChange} />
    );
};

export default SelectAmount;