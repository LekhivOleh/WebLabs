import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Catalog from './components/pages/Catalog/Catalog';
import Item from './components/pages/Item/Item';
import './App.css';
import Cart from "./components/pages/Cart/Cart";
import Layout from "./components/Layouts/Layout";
import CheckoutPage from "./components/pages/CheckoutPage/CheckoutPage";
import SuccessPage from "./components/pages/SuccessPage/SuccessPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="item/:id" element={<Item />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path={"success"} element={<SuccessPage/>} />
            </Route>
        </Routes>
    );
};

export default App;