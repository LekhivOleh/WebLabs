import React, { FC, useEffect } from 'react';
import './Cart.css';
import { defaultSearchOptions } from "../../../assets/utils/SearchOptions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store.config";
import { getCarts } from "../../../store/cartSlice";
import { getLamps } from "../../../store/lampSlice";
import { CartDTO } from "../../../assets/utils/CartDto";
import CartService from "../../../services/CartService";
import lampphoto from '../../features/ItemSection/assets/images/no_image_item.svg';
import GoBackButton from "../../shared/GoBackButton/GoBackButton";

const CartPage: FC = () => {
    const { cart } = useSelector((state: RootState) => state.cartReducer);
    const { lamp: lamps } = useSelector((state: RootState) => state.lampReducer);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCarts()).then(() => {
            dispatch(getLamps(defaultSearchOptions));
        });
    }, [dispatch]);

    const handleCartUpdate = async (item: CartDTO, change: number) => {
        if (item.id) {
            const updatedItem = {
                ...item,
                amount: item.amount + change,
                id: item.id,
                type: item.type
            };
            if (updatedItem.amount > 0) {
                await CartService.updateCart(item.id, updatedItem);
                dispatch(getCarts());
            }
        }
    };

    const handleItemDelete = async (id: string | undefined) => {
        if (id) {
            await CartService.deleteCart(id);
            dispatch(getCarts());
        }
    };

    return (
        <section className={"cart"}>
            <h1>Your cart</h1>
            <div className={"cart-items"}>
                {cart && cart.map((item: CartDTO) => (
                    <div key={item.id} className={"cart-item"}>
                        <Link to={`/lamps/${item.lampId}`}><img src={lampphoto} alt={`${item.lampId}`} /></Link>
                        <div className={"cart-item-info"}>
                            <h3>{lamps && lamps.find(l => l.id === item.lampId)?.manufacturer}</h3>
                            <p>Type: {item.type}</p>
                        </div>
                        <div className={"cart-item-actions"}>
                            <button
                                className={"quantity-button"}
                                onClick={() => handleCartUpdate(item, 1)}
                            >
                                +
                            </button>
                            <h3>{item.amount}</h3>
                            <button
                                className={"quantity-button"}
                                onClick={() => handleCartUpdate(item, -1)}
                            >
                                -
                            </button>
                        </div>
                        <div className={"cart-item-info"}>
                            <h3>{lamps && ((lamps.find(l => l.id === item.lampId)?.price ?? 0) * item.amount).toFixed(2)} $</h3>
                        </div>
                        <button className={"delete-button"} onClick={() => handleItemDelete(item.id)}>
                            x
                        </button>
                    </div>
                ))}
            </div>
            <h2 className={"total-price"}>Total price: {cart && cart.reduce((total, item) => {
                const lamp = lamps?.find(l => l.id === item.lampId);
                return total + (lamp ? lamp.price * item.amount : 0);
            }, 0).toFixed(2)} $</h2>
            <div className={"cart-navigation"}>
                <GoBackButton/>
                <Link to='/checkout'>Continue</Link>
            </div>
        </section>
    );
};

export default CartPage;