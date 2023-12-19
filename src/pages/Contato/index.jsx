import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Contato (){

    const senha_correta = "123456Ab"
    const [senha, setSenha] = useState()
    const navigate = useNavigate()

    function enviarDados(evento){
        evento.preventDefault()

        if (senha === senha_correta){
            navigate("/deucerto", {
                state: senha
            })
        }else{
            alert("Senha incorreta")
        }

    }
    return(
        <>
        <h1>Contato</h1>    
        <form onSubmit={enviarDados}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />

            <label htmlFor="senha">Senha</label>
            <input onChange={(e)=> setSenha(e.target.value)} type="password" name="senha" id="senha" />

            <button>Enviar</button>
        </form>
        </>
    )
}

export default Contato