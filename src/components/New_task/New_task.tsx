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
    const [priority, setPriority] = useState('')


    const handleSubmit = async () => {

        
        const data = {
            name: taskName,
            description: description,
            deadline: limitDate, 
            priority:priority,
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
        setPriority('')
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
                    <input type="text" name="task-name" className='task-name'  placeholder='Nome da tarefa' onChange={(e) => setTaskName(e.target.value)}  required/>

                    <input type="text" name="responsible-name" className='responsible-name' placeholder='Responsável principal'  required />
                    
                    <label >Nível de Prioridade</label>
                    
                    <select
                        className="priority_Dropdown"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required 
                    >
                        <option value="verde">Baixo</option>
                        <option value="amarelo">Razoavel</option>
                        <option value="vermelho">Alto</option>
                    </select>

                    <div className='date-container'>
                        <label>Data Limite:</label>
                        <input type="date" onChange={(e) => setLimitDate(e.target.value)} required  />
                    </div>

                    <textarea placeholder='Descrição' rows={5} cols={30} onChange={(e) => setDescription(e.target.value)}></textarea>
                    
                    <button type ="button" className='submit-button' onSubmit={handleSubmit}>Adicionar Tarefa</button>
                </form>
            </div>
            
        </>
    )
}