import './process_card_style.scss'
import vetor from '../../assets/Vector.png';
import { useState } from 'react';


export function Process_card(){

    const [selectedContributor, setSelectedContributor] = useState('');
    const contributorOptions = ["Gustavo", "Pedro", "Hugo","Vinicius","Victor","Jaqueline","Hugo", "Gustavo Henrique" , "Thiago"];

    return(
        <div className="card_wrapper">
            <h1>Novo Projeto</h1>

            <div className='input_line'>
                <div className="input_wrapper">
                    <label htmlFor="input_nome">Nome do Projeto</label>
                    <input id="input_nome"></input>
                </div>

                <div className="input_wrapper">
                    <label htmlFor="responsavel">Responsavel</label>
                    <input id="responsavel"></input>
                </div>
            </div>

            <div className='lower_card_container'>

                <div className='description_wrapper'>

                    <select className='dropdown_wrapper' id="contribuidores" value={selectedContributor} onChange={(e) => setSelectedContributor(e.target.value)}>
                        <option value="">Select a contributor</option>
                        {contributorOptions.map((contributor, index) => (
                            <option key={index} value={contributor}>
                            {contributor}
                            </option>
                        ))}
                        
                    </select>


                    <div className="input_wrapper">
                        <label htmlFor="contribuidores">Descrição</label>
                        <input id="Descrição"></input>
                    </div>

                    

            </div>

                <div className='icons_container'>
                    <div className='icons_line'>
                        <img src={vetor}></img>
                        <img src={vetor}></img>
                        <img src={vetor}></img>
                        <img src={vetor}></img>
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