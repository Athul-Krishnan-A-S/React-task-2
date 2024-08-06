import React, { createContext, useState, useContext } from 'react';

const DataLoadContext = createContext();

export const DataLoadProvider = ({ children }) => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    return (
        <DataLoadContext.Provider value={{ isDataLoaded, setIsDataLoaded }}>
            {children}
        </DataLoadContext.Provider>
    );
};

export const useDataLoad = () => {
    const context = useContext(DataLoadContext);
    if (!context) {
        throw new Error('useDataLoad must be used within a DataLoadProvider');
    }
    return context;
};
