import { createContext, useContext } from "react";

export const UserCardsContext = createContext(undefined);

export function useUserContext(){
    const user = useContext(UserCardsContext);
    if(user === undefined){
        throw new Error('Users is not defined');
    }
    return user;
}