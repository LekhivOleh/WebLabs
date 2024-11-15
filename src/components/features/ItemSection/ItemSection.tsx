import React, { useState, useEffect } from 'react';
import './ItemSection.css';
import { useParams } from 'react-router-dom';
import Select from '../../shared/Select/Select';
import GoBackButton from "../../shared/GoBackButton/GoBackButton";
import AddToCartButton from "../../shared/AddToCartButton/AddToCartButton";
import photo from '../../../assets/images/no_image.svg';
import SelectAmount from "../../shared/SelectAmount/SelectAmount";
import LampService from '../../../services/LampService';
import { LampDto } from "../../../assets/utils/LampDto";
import LoaderSpinner from '../../shared/Loader/Loader';

const ItemSection = () => {
    const { id } = useParams<{ id: string }>();
    const [lamp, setLamp] = useState<LampDto | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [amount, setAmount] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            LampService.getLampById(id).then((response) => {
                setLamp(response.data);
                setSelectedColor(response.data.color);
                setLoading(false);
            });
        }
    }, [id]);

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(event.target.value);
    };

    if (loading) {
        return <LoaderSpinner />;
    }

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
                            <p>Select color</p>
                            <Select
                                className="select_lamps_color"
                                name="color"
                                options={['black', 'red', 'orange', 'brown', 'white']}
                                onChange={handleColorChange}
                                value={selectedColor}
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
                    <AddToCartButton/>
                </div>
            </div>
        </div>
    );
};

export default ItemSection;