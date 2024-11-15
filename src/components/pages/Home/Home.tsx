import React, { FC, useState, useEffect } from 'react';
import CardSection from '../../features/CardSection/CardSection';
import { Lamp } from '../../../assets/utils/Lamp';
import HeroSection from "../../features/HeroSection/HeroSection";
import LampService from '../../../services/LampService';
import './Home.css';
import { SearchOptions } from "../../../assets/utils/SearchOptions";
import Loader from '../../shared/Loader/Loader';

const Home: FC = () => {
    const [lamps, setLamps] = useState<Lamp[]>([]);
    const [searchOptions, setSearchOptions] = useState<SearchOptions>({
        search: '',
        sortManufacturer: '',
        filterPower: '',
        filterPrice: '',
        filterIsEconomical: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLamps = async () => {
            setLoading(true);
            try {
                const response = await LampService.getLamps(searchOptions);
                setLamps(response.data);
            } catch (error) {
                console.error('Error fetching lamps:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLamps();
    }, [searchOptions]);

    return (
        <div className="home">
            <HeroSection />
            {loading ? <Loader /> : <CardSection lamps={lamps} setLamps={setLamps} />}
        </div>
    );
};

export default Home;