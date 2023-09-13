
import { useState } from 'react'
import React from 'react'
import './login_style.scss'
import { Recovery_screen } from '../Recovery_screen/screen'




export function Login(){

   const [login_mode,setLoginMode] = useState("login")

    if(login_mode == "login"){
        return (
            <div className='login_wrapper'>
                <div className="buttons">
                {/* <button className='mode_button' onClick={() => setLoginMode("login")}>Login</button>
                <button className='mode_button' onClick={() => setLoginMode("cadastro")}>Cadastro</button> */}
                </div>
                <h1>Login</h1>
                <form>
                    <div className='input_wrapper'>
                        <label htmlFor='input_email'>Email</label>
                        <input placeholder='digite seu email' id='input_email'></input>
                    </div>
                    <div className='input_wrapper'>
                        <label htmlFor='input_senha'>Senha</label>
                        <input placeholder='digite sua senha' id='input_senha'></input>
                    </div>
                    <button>Confirmar</button>
                    <div className='paragraph'>
                        <p>Não possui cadastro? <span onClick={() => setLoginMode("cadastro")}>cadastrar</span></p>
                    </div>            
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
            <div className='login_wrapper'>
            <div className="buttons">
            {/* <button className='mode_button' onClick={() => setLoginMode("login")}>login</button>
            <button className='mode_button' onClick={() => setLoginMode("cadastro")}>Cadastro</button> */}
            </div>
            <h1>Cadastro</h1>
            <form>
                <div className='input_wrapper'>
                    <label htmlFor='input_email'>Email</label>
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
                <div className='paragraph'>
                    <p>Já tem uma conta? <span onClick={() => setLoginMode("login")}>fazer login</span></p>
                </div>            
            </form>
        </div>
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