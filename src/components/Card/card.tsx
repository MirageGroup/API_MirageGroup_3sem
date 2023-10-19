// src/Item.tsx
import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './card.scss'
import {BiSolidUserCircle} from 'react-icons/bi'
import {FaRegTrashCan} from 'react-icons/fa6'
import {AiFillFileAdd} from 'react-icons/ai'
import TaskInterface from '../../Interfaces/Interfaces'
import TaskDetailCard from '../TaskDetailCard/TaskDetailCard'
import axios from 'axios'
import Confirm_delete from '../Confirm_delete/Confirm_delete'


interface ItemProps {
  text: string
  index: number
  task: TaskInterface
  openModalCard: (task: TaskInterface|null) => void;
}





const Card: React.FC<ItemProps> = (props) => {



  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [deleteConfirmed,setDeleteConfirmed] = useState(false)

    const openConfirmModal = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsConfirmModalOpen(true);
    };
    
    const closeConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };

    async function handle_delete_confirmation(){
        setDeleteConfirmed(true)
        if (props.task != null && deleteConfirmed == true){
            const response = await axios.delete(`http://localhost:8000/task/${props.task.id}/delete`);
            console.log('deletado')
                 
        }   
        
    }


  return (
    <>
    <Draggable draggableId={props.text} index={props.index}>
      {provided => (
        <section className='super-container'
        
        onClick={() => props.openModalCard(props.task)}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
                <div className='color'></div>
                <div className='card-container'>
                    <div className='name-paragraph'><p>{props.text}</p></div>
                    <div className='date'><p>{new Date(props.task.created_at).toLocaleDateString()}</p></div>
                    
                </div>

                <div className='icons-container_card'>
                    <div className='picture'><BiSolidUserCircle size={29}/></div>
                  <button onClick={(e)=>openConfirmModal(e)}>
                    <div className='trash'><FaRegTrashCan size={19}/></div>
                  </button>
                </div>
            </section>
      )}
    </Draggable>

    {isConfirmModalOpen && (
            <div className="cardModalBackdrop">
                <div className="cardModalCenter">
                    <div className="cardModal">
                        <Confirm_delete delete_name={props.task.name} close_confirm_modal={closeConfirmModal} delete_function={handle_delete_confirmation}></Confirm_delete>
                    </div>
                </div>
      </div>                      
    )}
    
    </>
  )
}

export default Card