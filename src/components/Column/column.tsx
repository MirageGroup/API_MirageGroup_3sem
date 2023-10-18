// src/components/Column.tsx
import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/card';
import './column.scss'

// TypeScript only
interface ColumnProps {
    col: {
      id: string
      list: string[]
    }
  }



  const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
    return (
      <Droppable droppableId={id}>
        {provided => (
          <div
          className='column_container'>
            <h2 className='column_title'>{id}</h2>
            <div className='column_list' {...provided.droppableProps} ref={provided.innerRef} >
              {list.map((text, index) => (
                <Card key={text} text={text} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    )
  }

export default Column