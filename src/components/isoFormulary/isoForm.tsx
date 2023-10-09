
import './isoFormStyle.scss'

export function IsoForm({close_modal_function}:any){
    return(
    <div className="iso_form_wrapper">
            <h2>Cadastro de ISO</h2>
            <form action="#" method="post">
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