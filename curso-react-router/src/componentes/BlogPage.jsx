import React from "react";
import { BlogLink } from "./BlogLink";
import { blogdata} from "../apis/blogdata"

function BlogPage () {
    return(
        <>
            <h1>Blogpage</h1>

            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post}/>
                ))}
            </ul>
        </>
    )
}

export { BlogPage };