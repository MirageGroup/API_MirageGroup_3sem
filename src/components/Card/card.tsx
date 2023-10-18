// src/Item.tsx
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './card.scss'

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
        <div
          className='card_container'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  )
}

export default Card