import { useContext } from "react";
import { useUserContext } from "../../context/UseUserCardsContext";
import { ThemeContext } from "../../context/ThemeContext";

function Card() {
    const users = useUserContext();
    const theme = useContext(ThemeContext);

    return (
        <div className={theme.theme === 'dark' ? "cards-Container dark-container" : "cards-Container"}>
            {users.map((element, index) => {
                return (
                    <div key={index} className={theme.theme === 'dark' ? "card dark-cards" : "card"}>
                        <div className="user-cards-image-container">
                            <img src={element.avatar} alt="element.name"></img>
                        </div>
                        <div className="user-cards-contents">
                            <p>{element.name}</p>
                            <p>{element.Age}</p>
                            <p>{element.Gender}</p>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}
export default Card;