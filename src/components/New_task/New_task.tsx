import './New_task.scss';
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import React, { useState } from 'react';


export function New_task({ onCloseForm }) {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleToggleForm = () => {
      setIsFormVisible(!isFormVisible);
    };
    return (
        
        <>
            
            <div className='form-container'>
                <div className='form-title'><h3>Nova Tarefa</h3></div>
                <button className='close-button-form' onClick={handleToggleForm}><IoMdClose size={35} className='button'/></button>
                <form>
                    <input type="text" name="task-name" className='task-name'  placeholder='Nome da tarefa'/>

                    <input type="text" name="responsible-name" className='responsible-name' placeholder='Responsável principal'/>

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
                        <input type="date" />
                    </div>

                    <textarea placeholder='Descrição' rows={12} cols={30}></textarea>
                    
                    <button type="submit">Adicionar Tarefa</button>

                </form>
            </div>
            
            
        </>
    )
}