import React , { useState , useEffect } from 'react';
import './withLoader.css';

const WithLoader = (OldComponent) => {
    return function EnhancedComponent(props){
        const [loading ,setLoading] = useState(true);

        useEffect(() => {
            const timer  = setTimeout(() => {
               setLoading(false) 
            }, 1000);

            return() => clearTimeout(timer);
        },[]);

        if(loading){
            return (
                <div className='loader-container'>
                    <section className="dots-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </section>
                    <p>Fetching Api</p>
                </div>
            )
        }
        return <OldComponent {...props} />
    };
};

export default WithLoader;