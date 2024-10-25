import React, { FC, ReactNode } from 'react';
import LampContext, { lamps } from './lamp';

interface LampProviderProps {
    children: ReactNode;
}

const LampProvider: FC<LampProviderProps> = ({ children }) => {
    return (
        <LampContext.Provider value={lamps}>
            {children}
        </LampContext.Provider>
    );
};

export default LampProvider;