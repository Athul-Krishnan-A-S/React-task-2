import './usersCards.css';
import { useContext, lazy, Suspense } from "react";
import { useUserContext } from "../../context/UseUserCardsContext";
import { ThemeContext } from "../../context/ThemeContext";

import Spinner from "../../components/Spinner/Spinner";
import WithLoader from "../withLoading/WithLoader";

const Card = lazy(()=> wait(1000).then(()=>import('../UserCard/Card')))

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}

function UsersCards() {
    const users = useUserContext();
    const theme = useContext(ThemeContext);
    return (
        <div className={theme.theme === 'dark' ? "user-cards-container dark-container" : "user-cards-container"}>
            <Suspense fallback={<Spinner />} >
                <Card />
            </Suspense>
        </div>

    );
}
export default WithLoader(UsersCards);