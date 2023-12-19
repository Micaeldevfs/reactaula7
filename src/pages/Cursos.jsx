import { Link } from "react-router-dom"
import Detalhes from "./Detalhes"

function Cursos (){
    return(
        <>
        <h1>Cursos</h1>
        <ul>
            <li>
                <Link to={"/detalhes/1"}>
                    Programação Fullstack
                </Link>
            </li>
            <li>
                <Link to={"/Detalhes/2"}>
                Data Science
                </Link>
                </li>
            <li>Marketing Digital</li>
            <li>Fotografia</li>
        </ul>
        </>
    )
}

export default Cursos