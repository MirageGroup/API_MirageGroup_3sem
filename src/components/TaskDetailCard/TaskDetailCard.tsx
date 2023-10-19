import React, { useState } from 'react';
import './TaskDetailCardStyle.scss'
import TaskInterface from '../../Interfaces/Interfaces';
import { FiX } from 'react-icons/fi';
import {AiFillFileAdd} from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';
import axios from 'axios';
import Confirm_delete from '../Confirm_delete/Confirm_delete';

interface TaskDetailCardProps {
    task: TaskInterface | null;
    closeCardModal: () => void;
   
}



export function TaskDetailCard( props : TaskDetailCardProps) {

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [deleteConfirmed,setDeleteConfirmed] = useState(false)

    const openConfirmModal = () => {
        setIsConfirmModalOpen(true);
    };
    
    const closeConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };

    function handle_delete_confirmation(){
        setDeleteConfirmed(true)
        if (props.task != null && deleteConfirmed == true){
            // const response = await axios.delete(`http://localhost:8000/task/${task.id}/delete`);
            console.log('deletado')
            props.closeCardModal()      
        }   
        
    }

    return (
        <div className="task-detail-card">
            {props.task ? (
                <>
                <div className="CardModalIcon">
                    <FiX onClick={props.closeCardModal} size={40}></FiX>
                </div>
                    
                <h1 className='task-title'>
                    {props.task.name} 
                </h1>
                
                
                <p className="task-description">{props.task.description}</p>

                <hr />
                <div className='lower_card'>
                    <div className="task-details">
                        <div className='detail_item'>
                            <h3>
                                <strong>Deadline:</strong> 
                                
                            </h3>
                            <h4>
                                {new Date(props.task.deadline).toLocaleDateString()}
                            </h4>
                        
                        </div>
                        <div className='detail_item'>
                            <h3>
                                <strong>Estado:</strong> 
                                
                            </h3>
                            <h4>
                                {props.task.state}
                            </h4>
                        
                        </div> 
                        <div className='detail_item'>
                            <h3>
                                <strong>Data de Criação:</strong>                                
                            </h3>
                            <h4>
                                {new Date(props.task.created_at).toLocaleDateString()}
                            </h4>                       
                        </div>                    
                    </div>

                    <div className='lower_buttons'>
                        <button >
                                <AiFillFileAdd size={30}></AiFillFileAdd>
                        </button>
                        <button onClick={(e)=>openConfirmModal()}>
                            <div className='trash'><FaRegTrashCan size={28}/></div>
                        </button>
                    </div>

                    {isConfirmModalOpen && (
                        <div className="cardModalBackdrop">
                            <div className="cardModalCenter">
                                <div className="cardModal">
                                    <Confirm_delete delete_name={props.task.name} close_confirm_modal={closeConfirmModal} delete_function={handle_delete_confirmation}></Confirm_delete>
                                </div>
                            </div>
                        </div>
                            
                                            
                    )}

                </div>
                     
                </>
            ) : (
                <p>Nenhuma tarefa selecionada</p>
            )}
        </div>
      );
};

export default TaskDetailCard;