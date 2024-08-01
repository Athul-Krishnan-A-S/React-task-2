import { useEffect, useState } from "react";
import './userDashboard.css';
import Header from "../../components/header/Header";
import UsersCards from "../../components/cards/UsersCards";
import { UserCardsContext } from "../../context/UseUserCardsContext";
import { ThemeProvider } from "../../context/ThemeContext";

function UserDashboard() {

    const api = 'https://66a9b6c0613eced4eba5fb36.mockapi.io/gallery';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(api)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((e) => {
                console.error(e);
            })
    }, [])

    return (
        <ThemeProvider  >
            <div className="user-dashboard-container">
                <div className="userDashboard-header-container">
                    <Header />
                </div>
                <UserCardsContext.Provider value={users}>
                    <UsersCards />
                </UserCardsContext.Provider>
            </div>
        </ThemeProvider>
    );
}
export default UserDashboard;