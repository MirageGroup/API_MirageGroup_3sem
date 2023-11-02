import { useState } from "react"
import './register_style.scss'

export default function Register(){

    const [selectedContributor,setSelectedContributor] = useState('')

    return(
        <div className='register_wrapper'>
            <h1>Cadastrar novo usuário</h1>
            <hr></hr>
            <form>
                <div className='input_wrapper'>
                    <label htmlFor='input_email'>Email institucional</label>
                    <input placeholder='digite seu email' id='input_email'></input>
                </div>
                
                <div className='input_wrapper'>
                    <label htmlFor='input_senha'>Senha</label>
                    <input placeholder='digite sua senha' id='input_senha'></input>
                </div>
                <div className='input_wrapper'>
                    <label htmlFor='input_senha'>Confirmar Senha</label>
                    <input placeholder='digite sua senha' id='input_senha'></input>
                </div>        
                <button>Cadastrar</button>
            </form>
        </div>
    )
}