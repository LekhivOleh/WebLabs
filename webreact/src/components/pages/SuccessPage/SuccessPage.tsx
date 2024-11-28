import React, {useEffect} from 'react';
import './SuccessPage.css';
import success_icon from '../../../assets/images/success_icon.png';
import {Link} from "react-router-dom";
import CartService from "../../../services/CartService";
import {jwtDecode} from "jwt-decode";
import AuthService from "../../../services/AuthService";

const SuccessPage = () => {

    useEffect(() => {
        const clearCart = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken: any = jwtDecode(token);
                const username = decodedToken.unique_name;
                const response = await AuthService.GetUserByUsername(username);
                const user_id = response.data.id;
                await CartService.deleteAllCarts(user_id);
            }
        };

        clearCart();
    }, []);

    return (
        <section className='success-page'>
            <img src={success_icon} alt='success icon' className='success-icon'/>
            <div className='success-text'>
                <h1 className='success-text-title'>Success!</h1>
                <p className='successful-order-text'>Your order has been successfully placed.</p>
                <p className='check-email-text'>Check your email box for additional order information</p>
            </div>
            <Link to='/catalog' className='success-back-button'>Go back to the catalog page</Link>
        </section>
    );
};

export default SuccessPage;