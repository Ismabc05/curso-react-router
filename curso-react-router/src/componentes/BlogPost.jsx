import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../apis/blogdata";
import { useAuth } from "../auth";
import { Modal } from "./Modal";

function BlogPost() {
  const [openModal, setOpenModal] = React.useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  const post = blogdata.find(p => p.slug === slug);

  const canDelete =
    auth.user?.isAdmin || post.author === auth.user?.username;

  const eliminarBlog = () => {
    setOpenModal(true);
  };

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author}</p>

      {canDelete && (
        <button onClick={eliminarBlog}>
          Eliminar blogpost
        </button>
      )}

      <button onClick={returnToBlog}>Atrás</button>

      {/* AQUÍ SE RENDERIZA EL MODAL */}
      {openModal && (
        <Modal
          slug={slug}
          cerrar={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export { BlogPost };