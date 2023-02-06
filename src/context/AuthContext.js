import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({email: 'rishik@gmail.com', password: '', accessCode: ''});


    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )

}