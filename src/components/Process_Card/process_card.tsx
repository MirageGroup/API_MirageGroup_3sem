import './process_card_style.scss'


export function Process_card(){

    return(
        <div className="card_wrapper">
            <h1>Novo Projeto</h1>

            <div className='input_line'>
                <div className="input_wrapper">
                    <label htmlFor="input_nome">Nome do Projeto</label>
                    <input id="input_nome"></input>
                </div>

                <div className="input_wrapper">
                    <label htmlFor="responsavel">responsavel</label>
                    <input id="responsavel"></input>
                </div>
            </div>

            <div className="input_wrapper">
                <label htmlFor="contribuidores">Contribuidores</label>
                <input id="contribuidores"></input>
            </div>
            
        </div>
    )
}