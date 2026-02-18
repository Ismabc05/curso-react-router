import React from "react";
import { BlogLink } from "./BlogLink";
import { blogdata} from "../blogdata"

function BlogPage () {
    return(
        <>
            <h1>Blogpage</h1>

            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post}/> // le estás pasando una prop llamada post al componente BlogLink, y su valor es la variable post.
                ))}
            </ul>
        </>
    )
}

export { BlogPage };