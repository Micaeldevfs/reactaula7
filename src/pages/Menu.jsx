import { Link } from "react-router-dom"

function Menu (){
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/cursos"}>Cursos</Link>
                </li>

                <li>
                    <Link to={"/contato"}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu