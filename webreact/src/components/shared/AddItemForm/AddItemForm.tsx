import React, { useState } from 'react';
import './AddItemForm.css';
import LampService from '../../../services/LampService';
import { LampDto } from '../../../assets/utils/LampDto';

const AddItemForm: React.FC = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [power, setPower] = useState('');
    const [amountOfLamps, setAmountOfLamps] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newItem: LampDto = {
            id: '',
            manufacturer,
            power: parseInt(power),
            amountOfLamps: parseInt(amountOfLamps),
            price: parseFloat(price),
            color
        };
        try {
            await LampService.createLamp(newItem);
            alert('Item added successfully!');
        } catch (error) {
            alert('Failed to add item.');
        }
    };

    return (
        <form className="add-item-form" onSubmit={handleSubmit}>
            <div>
                <label>Manufacturer:</label>
                <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
            </div>
            <div>
                <label>Power:</label>
                <input type="number" value={power} onChange={(e) => setPower(e.target.value)} required />
            </div>
            <div>
                <label>Amount of Lamps:</label>
                <input type="number" value={amountOfLamps} onChange={(e) => setAmountOfLamps(e.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;