import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Catalog from './components/pages/Catalog/Catalog';
import Item from './components/pages/Item/Item';
import './App.css';
import Cart from "./components/pages/Cart/Cart";
import Layout from "./components/Layouts/Layout";
import CheckoutPage from "./components/pages/CheckoutPage/CheckoutPage";
import SuccessPage from "./components/pages/SuccessPage/SuccessPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";
import ProtectedRoute from './components/entities/ProtectedRoute/ProtectedRoute';
import LoginPage from "./components/pages/LoginPage/LoginPage";
import {useDispatch} from "react-redux";
import {setLoggedIn} from "./store/authSlice";

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setLoggedIn(true));
        }
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="catalog" element={
                    <ProtectedRoute>
                        <Catalog />
                    </ProtectedRoute>
                } />
                <Route path="item/:id" element={
                    <ProtectedRoute>
                        <Item />
                    </ProtectedRoute>
                } />
                <Route path="cart" element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                } />
                <Route path="checkout" element={
                    <ProtectedRoute>
                        <CheckoutPage />
                    </ProtectedRoute>
                } />
                <Route path="success" element={
                    <ProtectedRoute>
                        <SuccessPage />
                    </ProtectedRoute>
                } />
                <Route path="sign-up" element={
                        <SignUpPage />
                } />
                <Route path="login" element={
                        <LoginPage />
                } />
            </Route>
        </Routes>
    );
};

export default App;