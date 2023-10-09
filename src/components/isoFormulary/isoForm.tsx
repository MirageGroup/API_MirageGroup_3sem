
import { useState } from 'react'
import './isoFormStyle.scss'

export function IsoForm({close_modal_function}:any){


    function handlesubmit(){
        close_modal_function()
    }

    return(
    <div className="iso_form_wrapper">
            <h2>Cadastro de um novo processo</h2>
            <hr></hr>
            <form action="#" method="post" className='iso_form' onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome da ISO:</label>
                    <input type="text" id="nome" name="nome" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição da ISO:</label>
                    <textarea id="descricao" name="descricao" required></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Cadastrar ISO</button>
                </div>
            </form>
     </div>
    )
}