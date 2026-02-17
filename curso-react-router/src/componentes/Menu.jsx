import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return(
        <nav>
            <ul>
                {routes.map(route => (
                    <li>
                        <NavLink to={route.to} style={({isActive}) => ({
                        color:  isActive ? "green" : "red"
                    })}>{route.text}</NavLink>
                    </li>
                ))}
                {/*<li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}

                {/*<li>
                    <NavLink to="/" style={({isActive}) => ({
                        color:  isActive ? "green" : "red" // con el parametro isActive nos permite, si estamos en esa ruta va a estar de color verde, si estamos en otra ruta diferente va a estar en rojo
                    })}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" style={({isActive}) => ({
                        color: isActive ? "green" : "red"
                    })}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" style={({isActive}) => ({
                        color: isActive ? "green" : "red"
                    })}>Profile</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

const routes = [];
routes.push({
    to: "/",
    text: "home"
})
routes.push({
    to: "/blog",
    text: "blog"
})
routes.push({
    to: "/profile",
    text: "profile"
})

export { Menu };

// la etiqueta a, cuando hacemos click recarga toda la pagina y ademas hay que poner el # , pero con link directamente va a la ruta sin recargar toda la pagina y tampoco hay que poner el #

// la etiqueta a, cuando hacemos click recarga toda la pagina y ademas hay que poner el # , pero con Navlink directamente va a la ruta sin recargar toda la pagina y tampoco hay que poner el # y ademas nos permite añadirle estilos segun estemos en esa ruta o no.

//NavLink tiene un problema y es que es muy repetitivo y si hay muchos tienes que ir pues poniendo estilos a cada uno, para ahorrarnos tiempo hacemos lo siguiente, tenemos un array donde le estamos agregando tres objetos que corresponden a las rutas, hacemos un punto map y por cada ruta que haya en nuestro array creamos un lis item donde el to va a ser route.to y el nombre va a ser route.text y le agregamos el estilo, lo cual solo lo escribimos una vez