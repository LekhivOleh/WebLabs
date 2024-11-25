import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../features/Header/Header";
import Footer from "../features/Footer/Footer";

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;