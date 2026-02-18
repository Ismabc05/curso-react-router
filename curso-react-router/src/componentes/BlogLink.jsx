import React from "react";
import { Link }from "react-router-dom";

function BlogLink({post}) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )

}


export {BlogLink}