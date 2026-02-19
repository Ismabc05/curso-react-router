import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import { blogdata } from "../apis/blogdata"

function BlogPost () {

    const { slug } = useParams();
    const navigate = useNavigate();

    const post = blogdata.find(p => p.slug === slug);

    const returnToBlog = () => {
       navigate("/blog");
    }

    return(
        <>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <button onClick={returnToBlog}>Atras</button>
        </>
    )
}

export { BlogPost };