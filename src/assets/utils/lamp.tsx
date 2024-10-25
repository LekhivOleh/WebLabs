import React, { createContext, useContext } from 'react';

export class Lamp {
    id: string = "";
    manufacturer: string = "";
    power: number = 0;
    amountOfLamps: number = 0;
}

export const lamps: Array<Lamp> = [
    {
        "id": "0",
        "manufacturer": "Philips",
        "power": 300,
        "amountOfLamps": 150
    },
    {
        "id": "1",
        "manufacturer": "Samsung",
        "power": 800,
        "amountOfLamps": 700
    },
    {
        "id": "2",
        "manufacturer": "Osram",
        "power": 20,
        "amountOfLamps": 10
    },
    {
        "id": "3",
        "manufacturer": "Panasonic",
        "power": 200,
        "amountOfLamps": 30
    },
    {
        "id": "4",
        "manufacturer": "GE Lighting",
        "power": 400,
        "amountOfLamps": 120
    },
    {
        "id": "5",
        "manufacturer": "Cree Lighting",
        "power": 350,
        "amountOfLamps": 100
    },
    {
        "id": "6",
        "manufacturer": "Havells",
        "power": 250,
        "amountOfLamps": 80
    },
    {
        "id": "7",
        "manufacturer": "Zumtobel",
        "power": 280,
        "amountOfLamps": 90
    },
    {
        "id": "8",
        "manufacturer": "Acuity Brands",
        "power": 500,
        "amountOfLamps": 200
    },
    {
        "id": "9",
        "manufacturer": "Eaton Lighting",
        "power": 450,
        "amountOfLamps": 180
    },
    {
        "id": "10",
        "manufacturer": "Fagerhult",
        "power": 320,
        "amountOfLamps": 110
    },
    {
        "id": "11",
        "manufacturer": "Toshiba Lighting",
        "power": 280,
        "amountOfLamps": 100
    },
    {
        "id": "12",
        "manufacturer": "Nichia",
        "power": 600,
        "amountOfLamps": 250
    },
    {
        "id": "13",
        "manufacturer": "Koninklijke Philips",
        "power": 520,
        "amountOfLamps": 300
    },
    {
        "id": "14",
        "manufacturer": "Signify",
        "power": 700,
        "amountOfLamps": 500
    },
    {
        "id": "15",
        "manufacturer": "Osram Opto Semiconductors",
        "power": 800,
        "amountOfLamps": 600
    },
    {
        "id": "16",
        "manufacturer": "Bridgelux",
        "power": 370,
        "amountOfLamps": 150
    },
    {
        "id": "17",
        "manufacturer": "Wipro Lighting",
        "power": 260,
        "amountOfLamps": 90
}];

const LampContext = createContext<Array<Lamp>>([]);

export const useLamps = () => useContext(LampContext);

export default LampContext;