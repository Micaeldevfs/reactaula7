import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cursos from "./pages/Cursos"
import Contato from "./pages/Contato"
import Menu from "./pages/Menu"
import Sucesso from "./pages/Sucesso"
import Detalhes from "./pages/Detalhes"

function App() {

  return (
    <>
     <BrowserRouter>
     <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cursos" element={<Cursos/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="deucerto" element={<Sucesso/>}/>
          <Route path="detalhes/:id" element={<Detalhes/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
