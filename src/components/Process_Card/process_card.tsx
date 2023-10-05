import './process_card_style.scss'
import vetor from '../../assets/Vector.png';
import { useState } from 'react';
import { FiX } from "react-icons/fi";
import axios from 'axios';


export function Process_card({close_modal_function}:any){


    const [projectName, setProjectName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [description, setDescription] = useState('');
    const [selectedContributor, setSelectedContributor] = useState('');
    const [startDate, setStartDate] = useState(''); // State for the start date
    const [endDate, setEndDate] = useState(''); // State for the end date
    const contributorOptions = ["Gustavo", "Pedro", "Hugo", "Vinicius", "Victor", "Jaqueline", "Hugo", "Gustavo Henrique", "Thiago"];

    console.log(endDate)

    const handleSubmit = async () => {

        const data = {
            name: projectName,
            description,
            deadline: endDate,   // Use endDate as date_finish
            state: "Não iniciado"
        };
      console.log(data)
  
      try {
        close_modal_function()
        const response = await axios.post('http://localhost:8000/process/create', data);
        console.log('Data sent successfully:', response.data);
  
        // Optionally, reset the form fields and state
        setProjectName('');
        setResponsible('');
        setDescription('');
        setSelectedContributor('');
        setStartDate('');
        setEndDate('');
      } catch (error) {
        console.error('Error sending data:', error);
        close_modal_function()
      }

      
    };


    return(
        <div className="card_wrapper_process">
            <h1>Novo Projeto</h1>

            <div className='input_line'>
                <div className="input_wrapper">
                    <label htmlFor="input_nome">Nome do Projeto</label>
                    <input id="input_nome" onChange={(e)=>setProjectName(e.target.value)}></input>
                </div>

                <div className='date_input'>

                    <div className="input_wrapper">
                        <label htmlFor="data_fim">Prazo</label>
                        <input type="date" id="data_fim" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                    </div>

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
                        <input id="Descrição" onChange={(e)=>setDescription(e.target.value)} ></input>
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
                        Procedimentos:
                    </div>
                    
                </div>

                <div className='concluir'>
                    <button onClick={close_modal_function}>Cancelar</button>
                    <button onClick={handleSubmit}>Concluir</button>
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