import React, { createContext, useContext, ReactNode } from 'react';
import { Lamp, lamps } from './lamp';

const LampContext = createContext<Lamp[]>(lamps);

export const useLamps = () => useContext(LampContext);

export const LampProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <LampContext.Provider value={lamps}>
            {children}
        </LampContext.Provider>
    );
};