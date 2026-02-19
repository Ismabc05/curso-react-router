import { HashRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./componentes/HomePage"
import { BlogPage } from "./componentes/BlogPage"
import { ProfilePage } from "./componentes/ProfilePage"
import { Menu } from "./componentes/Menu"
import { BlogPost } from "./componentes/BlogPost"
import { LoginPage } from "./componentes/LoginPage"
import { LogoutPage } from "./componentes/LogoutPage"
import { AuthProvider} from "./auth"
    

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>

          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/blog/:slug" element={<BlogPost/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/logout" element={<LogoutPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="*" element={<p>Not found</p>}/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
