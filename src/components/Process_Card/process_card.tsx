import './process_card_style.scss'
import vetor from '../../assets/Vector.png';
import { useState } from 'react';
import { FiX } from "react-icons/fi";


export function Process_card({close_modal_function}:any){


    const [selectedContributor, setSelectedContributor] = useState('');
    const contributorOptions = ["Gustavo", "Pedro", "Hugo","Vinicius","Victor","Jaqueline","Hugo", "Gustavo Henrique" , "Thiago"];

    return(
        <div className="card_wrapper_process">
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
                    
                    <label htmlFor="responsavel">Responsavel</label>
                    <select className='dropdown_wrapper' id="contribuidores" value={selectedContributor} onChange={(e) => setSelectedContributor(e.target.value)}>
                        <option value=""></option>
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
                        Procedimentos
                    </div>
                    
                </div>

                <div className='concluir'>
                    <button onClick={close_modal_function}>Cancelar</button>
                    <button onClick={close_modal_function}>Concluir</button>
                </div>
                

                {/* {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCenter">
                        <div className="modal">
                            <div className="modal_icons">
                                <FiX onClick={closeModal} size={30}></FiX>

                            </div>
                        <Process_card></Process_card>
                        </div>
                    </div>
                </div>
            )} */}
            
            </div>

        </div>

    
    )
}