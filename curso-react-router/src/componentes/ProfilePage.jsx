import React from "react";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";

function ProfilePage () {

    const auth = useAuth();

    if(!auth.user){
        return <Navigate to="/login"/> // si intenta entrar en /profile un uuario que no está actualizado va a hacer redirect a /login
    }

    return(
        <>
            <h1>Perfil</h1>
            <p>Bienvenido, {auth.user.username}</p>
        </>
    )
}

export { ProfilePage };