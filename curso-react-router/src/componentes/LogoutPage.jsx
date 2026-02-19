import React from "react";
import { useAuth} from "../auth"

function LogoutPage() {

    const auth = useAuth();

    const logout = (event) => {
        event.preventDefault();
        auth.logout();
        
    }

    return(
        <>
            <h1>Logout</h1>
            <form onSubmit={logout}>
                <label>¿Seguro de que quieres salir?</label>
                <button type="submit">Salir</button>
            </form>
        </>
    )
}


export { LogoutPage }