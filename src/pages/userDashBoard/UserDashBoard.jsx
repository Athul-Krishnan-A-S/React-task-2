import './userDashboard.css';
import Header from "../../components/header/Header";
import UsersCards from "../../components/userCards/UsersCards";
import { ThemeProvider } from "../../context/ThemeContext";
import { DataLoadProvider } from '../../context/DataLoadedContext';

function UserDashboard() {
    return (
        <ThemeProvider  >
            <DataLoadProvider>
                <div className="user-dashboard-container">
                    <div className="userDashboard-header-container">
                        <Header />
                    </div>
                    <UsersCards />
                </div>
            </DataLoadProvider>
        </ThemeProvider>
    );
}
export default UserDashboard;