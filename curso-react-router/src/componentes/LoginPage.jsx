import React from "react";
import { useAuth } from "../auth"
import { Navigate } from "react-router-dom";

function LoginPage() {

    const auth = useAuth();
    const [username, setUsername] = React.useState("");

    const login = (event) => {
        event.preventDefault();
        auth.login({username});
    }

    if(auth.user){
        return <Navigate to="/profile" /> // cuanto intente entrar a /login un usuario que está autenticado se vca a redirigir a /profile
    }

    return(
        <>
            <h1>Login</h1>

            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario:</label>
                <input value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}


export { LoginPage }