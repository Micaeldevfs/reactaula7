import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detalhes(){
    const {id} = useParams()
    const [curso, setCurso] = useState()

    async function buscar_curso(){ 
        const {data} = await axios.get("http://localhost:3000/programacao")
        setCurso(data)
}

useEffect(()=>{buscar_curso()},[])
    return(
    <>
    {curso &&
    <div>
        <h1>{curso.titulo}</h1>
        <img src={curso.foto} alt="" />
        <p>{curso.duracao}</p>
        <p>{curso.descricao}</p>
        </div>
    }
    </>)
}

export default Detalhes
