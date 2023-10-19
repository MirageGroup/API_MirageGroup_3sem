// src/Item.tsx
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './card.scss'
import {BiSolidUserCircle} from 'react-icons/bi'
import {FaRegTrashCan} from 'react-icons/fa6'
import {AiFillFileAdd} from 'react-icons/ai'
import TaskInterface from '../../Interfaces/Interfaces'

// TypeScript only
interface ItemProps {
  text: string
  index: number
  task: TaskInterface
}

// ": React.FC<ItemProps>" is TypeScript only
const Card: React.FC<ItemProps> = (props) => {
  return (
    <Draggable draggableId={props.text} index={props.index}>
      {provided => (
        <section className='super-container'
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
                <div className='color'></div>
                <div className='card-container'>
                    <div className='name-paragraph'><p>{props.text}</p></div>
                    <div className='date'><p>{props.task.created_at}</p></div>
                    
                </div>

                <div className='icons-container_card'>
                    <div className='picture'><BiSolidUserCircle size={29}/></div>
                  <button>
                    <div className='add-file'><AiFillFileAdd size={25}/></div>
                  </button>
                  <button>
                    <div className='trash'><FaRegTrashCan size={19}/></div>
                  </button>
                    
                    
                    
                </div>
            </section>
      )}
    </Draggable>
  )
}

export default Card