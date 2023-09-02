
import { useState } from 'react'
import React from 'react'
import './login_style.scss'




export function Login(){

   const [login_mode,setLoginMode] = useState("login")

    if(login_mode == "login"){
        return (
            <div className='login_wrapper'>
                <div className="buttons">
                <button className='mode_button' onClick={() => setLoginMode("login")}>login</button>
                <button className='mode_button' onClick={() => setLoginMode("cadastro")}>Cadastro</button>
                </div>
                <h1>LOGIN</h1>
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
                </form>
            </div>
        )
    }
    else if(login_mode == "cadastro"){
        return(
            <div className='login_wrapper'>
            <div className="buttons">
            <button className='mode_button' onClick={() => setLoginMode("login")}>login</button>
            <button className='mode_button' onClick={() => setLoginMode("cadastro")}>Cadastro</button>
            </div>
            <h1>CADASTRO</h1>
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
            </form>
        </div>
        )
    }
    
}