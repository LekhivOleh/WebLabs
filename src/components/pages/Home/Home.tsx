import React, { FC } from 'react';
import CardSection from '../../features/CardSection/CardSection';
import { Lamp } from '../../../assets/utils/lamp';
import HeroSection from "../../features/HeroSection/HeroSection";

interface HomeProps {
    lamps: Array<Lamp>;
}

const Home: FC<HomeProps> = ({ lamps }) => {

    return (
        <div className="home">
            <HeroSection/>
            <CardSection cards={lamps}/>
        </div>
    );
};

export default Home;