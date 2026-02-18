import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return(
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
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