import React from "react";
import {NavLink } from "react-router-dom";
import { routes } from "../apis/routes";
import { useAuth } from "../auth"

function Menu() {

    const auth = useAuth();

    return(
        <nav>
            <ul>
                {routes.map(route => {
                    if(route.private && !auth.user) return null //si el usuario no está autenticado y las rutas son privadas entonces no se va a mostrar esas rutas, en cambio si el usuario esta autenticadoo, si se van a mostrar
                    if(route.publicOnly && auth.user) return null // si la ruta tiene la propiedad publicOnly y el usuario esta autenticado entoces no la muestra
                    
                    return (
                    <li key={route.to}>
                        <NavLink to={route.to} style={({isActive}) => ({
                        color:  isActive ? "green" : "red"
                    })}>{route.text}</NavLink>
                    </li>
                )
                })}
            </ul>
        </nav>
    )
}

export { Menu };