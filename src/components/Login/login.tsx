import { useEffect, useState } from 'react'
import React from 'react'
import './login_style.scss'
import { Recovery_screen } from '../Recovery_screen/screen'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../middlewares/auth'
import { useUser } from '../../contexts/UserContext'
import Register from '../Register/register'

export function Login() {   

    const login = async () => {
        const data = {
            email: email,
            password: password
        }

        try {
            await axios.post('http://localhost:8000/user/login', data, { withCredentials: true }).then(() => {                
                window.location.href = '/home'
            })
        } catch (error) {
            window.alert("Email ou senha inválidos")
            console.log(error);
            throw error
        }
        
        
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const contributorOptions = ["gustavo","alves","thiago"]
    const [selectedContributor,setSelectedContributor] = useState()


    const [login_mode,setLoginMode] = useState("login")

    if(login_mode == "login"){
        return (
            <div className='login_wrapper'>
                <div className="buttons">
                {/* <button className='mode_button' onClick={() => setLoginMode("login")}>Login</button>
                <button className='mode_button' onClick={() => setLoginMode("cadastro")}>Cadastro</button> */}
                </div>
                <h1>SHORTS</h1>
                <hr></hr>
                <form onSubmit={e => e.preventDefault()}>
                    <div className='input_wrapper'>
                        <label htmlFor='input_email'>Email Corporativo</label>
                        <input type='email' placeholder='digite seu email' id='input_email' onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='input_wrapper'>
                        <label htmlFor='input_senha'>Senha</label>
                        <input type='password' placeholder='digite sua senha' id='input_senha' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button onClick={login}>Entrar</button>         
                </form>
            </div>
        )
    }
    else if(login_mode == "recuperar"){
        return(
            <div className='login_wrapper'>
            <div className="buttons">
            <button className='mode_button' onClick={() => setLoginMode("login")}>Login</button>
            <button className='mode_button' onClick={() => setLoginMode("recuperar")}>Recuperação</button>
            </div>
            <h1 className='titulo'>Recuperar Acesso</h1>
            <form>
                <div className='input_wrapper'>
                    <label htmlFor='input_email'>digite o email da conta:</label>
                    <input placeholder='email' id='input_email'></input>
                </div>
                <button onClick={() => setLoginMode("nova_senha")}>Enviar</button>
             </form>
        </div>
        )
    }
    else if(login_mode == "cadastro"){
        return(
            <Register contribuitorOptions={contributorOptions} setLogin={setLoginMode}></Register>
        )
    }
    else if(login_mode == "nova_senha") {
        return (
            <div className='login_wrapper'>
            <h1 className='titulo'>Recuperar Acesso</h1>
            <form>
              <div className='input_wrapper'>
                  <label htmlFor='input_email'>Nova senha:</label>
                  <input placeholder='digite seu email' id='input_email'></input>
              </div>
              <div className='input_wrapper'>
                  <label htmlFor='input_senha'>Confirmação de senha:</label>
                  <input placeholder='digite sua senha' id='input_senha'></input>
              </div>
              <button onClick={() => setLoginMode("login")}>Retornar ao Login</button>
            </form>
            </div> 
          )
    }
    
}