import './New_task.scss';
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import React, { useState } from 'react';
import axios from 'axios';

interface props {
    closeModal : () => void;
    process_id:any;
}

export function New_task(props : props) {


    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [limitDate, setLimitDate] = useState('');


    const handleSubmit = async () => {

        
        const data = {
            name: taskName,
            description: description,
            deadline: limitDate, 
            state: 'todo'
        };
      console.log(data)
  
      try {
        const response = await axios.post(`http://localhost:8000/task/${props.process_id}/create`, data);
        console.log('Data sent successfully:', response.data);


        props.closeModal()
        // Optionally, reset the form fields and state
        setTaskName('');
        setLimitDate('');
        setDescription('');
      } catch (error) {
        props.closeModal()
        console.error('Error sending data:', error);
      }

      
    };
    

    return (
        <>
            <div className='form-container'>
                <div className='form-title'><h3>Nova Tarefa</h3></div>
                <button className='close-button-form' onClick={props.closeModal}><IoMdClose size={35} className='button'/></button>
                <form>
                    <input type="text" name="task-name" className='task-name'  placeholder='Nome da tarefa' onChange={(e) => setTaskName(e.target.value)}/>

                    <input type="text" name="responsible-name" className='responsible-name' placeholder='Responsável principal' />

                    <div className="priority">
                        <label>Nível de Prioridade</label>
                        <div className='priority-buttons'>
                            <input type="radio" id="verde" name="prioridade" value="verde"/>
                            <label className="green" ></label>
                
                            <input type="radio" id="amarelo" name="prioridade" value="amarelo"/>
                            <label className="yellow" ></label>
                            
                            <input type="radio" id="vermelho" name="prioridade" value="vermelho"/>
                            <label className="red" ></label>
                        </div>
                    </div>

                    <div className='date-container'>
                        <label>Data Limite:</label>
                        <input type="date" onChange={(e) => setLimitDate(e.target.value)}/>
                    </div>

                    <textarea placeholder='Descrição' rows={5} cols={30} onChange={(e) => setDescription(e.target.value)}></textarea>
                    
                    <button type ="button" className='submit-button' onClick={handleSubmit}>Adicionar Tarefa</button>
                </form>
            </div>
            
        </>
    )
}