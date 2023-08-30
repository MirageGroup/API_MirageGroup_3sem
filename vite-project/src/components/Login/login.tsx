
import React from 'react'
import './login_style.scss'
import imagemFoda from '../../assets/doge_image.jpg';



export function Login(){

   const [isLogin,setIsLogin] = UseState()


    return(
        <div className='login_wrapper'>
            <div className="buttons">
            <button className='mode_button'>Home</button>
            <button className='mode_button'>Cadastro</button>
            </div>
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