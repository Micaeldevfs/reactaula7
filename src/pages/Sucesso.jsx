import { useLocation } from "react-router-dom"

function Sucesso (){
    const location = useLocation()
    return(
        <>
            <h1>Sucesso</h1>
            <p>A senha digitada foi: {location.state}</p>
        </>
    )
}
export default Sucesso