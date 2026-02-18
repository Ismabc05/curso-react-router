import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import { blogdata } from "../blogdata"

function BlogPost () {

    const { slug } = useParams(); // useParams nos trae lo que haya detras de :
    const navigate = useNavigate(); // useNavigate sirve para navegar sin usar useParams

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