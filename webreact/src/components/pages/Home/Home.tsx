import React, { FC } from 'react';
import CardSection from '../../features/CardSection/CardSection';
import HeroSection from "../../features/HeroSection/HeroSection";
import './Home.css';

const Home: FC = () => {
    return (
        <div className="home">
            <HeroSection />
            <CardSection />
        </div>
    );
};

export default Home;
