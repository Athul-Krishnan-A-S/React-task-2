import { createContext ,useState } from "react";

export const ThemeContext = createContext({
    theme:'light',
    setThemeHandler:() => {}
});


export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light');
    const setThemeHandler = (newTheme) => {
        setTheme(newTheme);
    };
    return(
        <ThemeContext.Provider value={{theme,setThemeHandler}}>
            {children}
        </ThemeContext.Provider>
    );
};




