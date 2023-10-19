// src/Item.tsx
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './card.scss'
import {BiSolidUserCircle} from 'react-icons/bi'
import {FaRegTrashCan} from 'react-icons/fa6'
import {AiFillFileAdd} from 'react-icons/ai'

// TypeScript only
interface ItemProps {
  text: string
  index: number
}

// ": React.FC<ItemProps>" is TypeScript only
const Card: React.FC<ItemProps> = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <section className='super-container'
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
                <div className='color'></div>
                <div className='card-container'>
                    <div className='name-paragraph'><p>{text}</p></div>
                    <div className='date'><p>dd/mm/aaaa hh:mm</p></div>
                    <div className='picture'><BiSolidUserCircle size={29}/></div>
                </div>

                <div className='icons-container'>
                    <div className='add-file'><AiFillFileAdd size={25}/></div>
                    <div className='trash'><FaRegTrashCan size={19}/></div>
                </div>
            </section>
      )}
    </Draggable>
  )
}

export default Card