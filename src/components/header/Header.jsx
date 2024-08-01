import Button from '../button/Button';
import './header.css';
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from 'react';

function Header() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? "header-container light" : "header-container dark-header"}>
            <Button />
        </div>
    );
}
export default Header;
