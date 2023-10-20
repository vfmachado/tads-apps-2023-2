import { createContext, useState } from "react";
import api from "../../api/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    const signIn = async (email) => {
        setUser({ email });
        api.defaults.headers.authorization = `Bearer ${email}`;
        
        try {
            await api.get('/login');
        } catch (error) {
            console.log("ERRO AO FAZER LOGIN ")
        }
        setIsLogged(true);
    }

    const signOut = () => {
        setUser(null);
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider value={ { name: null, isLogged, user, signIn, signOut} }>
            { children }
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };