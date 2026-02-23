import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { blogdata } from "../apis/blogdata";

function Modal({ slug, cerrar }) {
  const navigate = useNavigate();

  const eliminarPost = () => {
    const index = blogdata.findIndex(p => p.slug === slug);

    if (index !== -1) {
      blogdata.splice(index, 1);
      cerrar(); // cerrar modal
      navigate("/blog");
    }
  };

  const cancelar = () => {
    cerrar();
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <p>¿Desea eliminar el post?</p>

      <button onClick={eliminarPost}>Sí</button>
      <button onClick={cancelar}>No</button>
    </div>,

    document.getElementById("modal")
  );
}

export { Modal };