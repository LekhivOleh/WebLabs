import React from 'react';
import './AddItemButton.css';

interface AddItemButtonProps {
    onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className='add_item_button'>
            Add item
        </button>
    );
};

export default AddItemButton;