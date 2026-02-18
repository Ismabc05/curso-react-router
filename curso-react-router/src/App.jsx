import { HashRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./componentes/HomePage"
import { BlogPage } from "./componentes/BlogPage"
import { ProfilePage } from "./componentes/ProfilePage"
import { Menu } from "./componentes/Menu"
import { BlogPost } from "./componentes/BlogPost"

    

function App() {

  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/blog/:slug" element={<BlogPost/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
