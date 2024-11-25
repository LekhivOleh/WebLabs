import React, { useEffect } from 'react';
import './ItemSection.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../../shared/Select/Select';
import GoBackButton from "../../shared/GoBackButton/GoBackButton";
import photo from '../../../assets/images/no_image.svg';
import { RootState, AppDispatch } from '../../../store/store.config';
import { getLampById } from '../../../store/lampSlice';
import { getCarts } from '../../../store/cartSlice';
import SelectAmount from "../../shared/SelectAmount/SelectAmount";
import AddToCartButton from "../../shared/AddToCartButton/AddToCartButton";
import CartService from '../../../services/CartService';
import {CartDTO} from "../../../assets/utils/CartDto";

const ItemSection = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch: AppDispatch = useDispatch();
    const { selectedLamp: lamp } = useSelector((state: RootState) => state.lampReducer);
    const { cart } = useSelector((state: RootState) => state.cartReducer);
    const [amount, setAmount] = React.useState<number>(0);
    const [type, setType] = React.useState<string>('bedside');

    useEffect(() => {
        if (id) {
            dispatch(getLampById(id));
        }
    }, [id, dispatch]);

    const handleAddToCart = async () => {
        try {
            if (lamp) {
                if (!amount || !type) {
                    alert('Please select amount and type');
                    return;
                } else if (amount < 1) {
                    alert('Amount cannot be 0 or negative');
                    return;
                }

                const newCart: CartDTO = {
                    lampId: lamp.id,
                    amount: amount,
                    type: type
                };

                await CartService.createCart(newCart);
                alert('Lamp added to cart successfully');
            }
        } catch (e) {
            console.error('Failed to add to cart', e);
        }
    };

    if (!lamp) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item_section">
            <div className={'item_section_container'}>
                <img className={'lamps_image'} src={photo} alt="Lamp"/>
                <div className={'lamps_information'}>
                    <h1>{lamp.manufacturer}</h1>
                    <p>Power: {lamp.power}w</p>
                    <p>Amount of Lamps: {lamp.amountOfLamps}pcs</p>
                    <div className="select_lamps_information">
                        <div>
                            <p>Select type</p>
                            <Select
                                className="select_lamps_type"
                                name="lampType"
                                options={['bedside', 'stand', 'torcher']}
                                onChange={(event) => setType(event.target.value)}
                                value={type}
                            />
                        </div>
                        <div>
                            <p>Select amount</p>
                            <SelectAmount amount={amount} setAmount={setAmount}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'lamps_footer'}>
                <h1>Price: ${lamp.price}</h1>
                <div className={'buttons-container'}>
                    <GoBackButton/>
                    <AddToCartButton onClick={handleAddToCart}/>
                </div>
            </div>
        </div>
    );
};

export default ItemSection;