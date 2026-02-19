import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"

const AuthContext = React.createContext(); // como la autorizacion la vamos a necesitar siempre, creamos un contexto ya que permite que muchos componentes accedan al mismo estado global fácilmente.

function AuthProvider({children}) {

    const navigation = useNavigate()
    const [user, setUser] = React.useState(null);

    const login = ({username}) => {
        setUser({username});
        navigation("/profile")
    }

    const logout = () => {
        setUser(null);
        navigation("/")
    }

    const auth = {
        user,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() { // creamos este useAuth para que no tengamos que poner todo el rato, useContext, AuthCOntext, ya que los que guardamos en useAuth es eso mismo
    const auth = useContext(AuthContext);
    return auth
}


export { AuthProvider, useAuth}