import { HashRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./componentes/HomePage"
import { BlogPage } from "./componentes/BlogPage"
import { ProfilePage } from "./componentes/ProfilePage"
import { Menu } from "./componentes/Menu"


// con hashrouter nuestra ruta empezará siempre con #      

function App() {

  return (
    <>
      <HashRouter> {/* todo va dentro de estas etiquetas, esto es un provider */}
        <Menu/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<p>Not found</p>}/>  {/* cualquier ruta que no esté creada va a salir ese parrafo */}
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
