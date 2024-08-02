import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import '../userCards/usersCards.css';

function Card({ element, index }) {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme.theme === 'dark' ? "cards-Container dark-container" : "cards-Container"}>
            <div className={theme.theme === 'dark' ? "card dark-cards" : "card"}>
                <div className="user-cards-image-container">
                    <img
                        src={element.avatar}
                        alt={element.name}
                        loading="lazy"
                    />
                </div>
                <div className="user-cards-contents">
                    <p>{element.name}</p>
                    <p>{element.Gender}</p>
                    <p>{element.country}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
