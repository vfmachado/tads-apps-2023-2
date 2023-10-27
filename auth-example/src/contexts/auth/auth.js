import { createContext, useState } from "react";
import api from "../../api/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        setUser({ email });
        //api.defaults.headers.authorization = `Bearer ${email}`;
        
        try {
            const response = await api.post('/login', {
                email,
                password
            });
            const { user, token } = response.data;

            api.defaults.headers.authorization = token;
            setUser(user);
            
            setIsLogged(true);
        } catch (error) {
            console.log("ERRO AO FAZER LOGIN ")
        }
     
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