
import React from 'react'
import './login_style.scss'
import imagemFoda from '../../assets/doge_image.jpg';

export function Login(){
    return(
        <div className='login_wrapper'>
            <img className='login_img' src={imagemFoda} alt='imagem muito foda'></img>
            <h2>Login</h2>
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