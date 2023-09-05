import './process_card_style.scss'
import vetor from '../../assets/Vector.png';


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

            <div className='lower_card_container'>

                <div className='description_wrapper'>

                    <div className="input_wrapper">
                        <label htmlFor="contribuidores">Contribuidores</label>
                        <input id="contribuidores"></input>
                    </div>

                    <div className="input_wrapper">
                        <label htmlFor="contribuidores">Descrição</label>
                        <input id="Descrição"></input>
                    </div>

                    

            </div>

                <div className='icons_container'>
                    <div className='icons_line'>
                        <img src={vetor}></img>
                    </div>

                    <div className='procedimentos'>
                        procedimentos
                    </div>

                </div>
            
            </div>

        </div>

    
    )
}