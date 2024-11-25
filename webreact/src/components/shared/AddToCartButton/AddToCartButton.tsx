import React, {FC} from 'react';
import './AddToCartButton.css';

interface props {
    onClick: () => void;
}

const AddToCartButton: FC<props> = ({onClick}) => {
    return (
        <button className={'add_to_cart_button'} onClick={onClick}>Add to cart</button>
    );
};

export default AddToCartButton;