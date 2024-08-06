import React, { useState, useEffect } from 'react';
import './withLoader.css';
import { useDataLoad } from "../../context/DataLoadedContext";

const WithLoader = (OldComponent) => {
    return function EnhancedComponent(props) {
        const { isDataLoaded } = useDataLoad();
        const [loading, setLoading] = useState(false);
        console.log(isDataLoaded)

        // useEffect(() => {
        //     if (isDataLoaded) {
        //         setLoading(false); 
        //     }
        // }, [isDataLoaded]);

        if (loading) {
            return (
                <div className='loader-container'>
                    <section className="dots-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </section>
                </div>
            );
        }
        return <OldComponent {...props} />;
    };
};

export default WithLoader;
