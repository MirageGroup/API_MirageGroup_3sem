import { useState } from 'react'
import  './style.scss'

interface header_props{
    theme:string
    change_mode:() => void
}

export function Header(props: header_props){

    return(
        <header className={`${props.theme}`}>
            <div className={`div_titulo`}>
                <h1>Mirage Group</h1>
                <h4>Entrar</h4>
                <h4>Sair</h4>
            </div>
            <button className = {`header_button`}onClick={props.change_mode}>alternar modo </button>
           
            
        </header>
    )
}