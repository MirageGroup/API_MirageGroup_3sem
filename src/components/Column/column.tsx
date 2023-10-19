import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/card';
import './column.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Add_card } from '../Add_card/add_card';
import TaskInterface from '../../Interfaces/Interfaces';

interface ColumnProps {
  col: {
    id: string;
    list: TaskInterface[];
  };
  openModal: () => void;
}

const Column: React.FC<ColumnProps> = (props) => {
  return (
    <div className='column_container'>
      <section className='title-container'>
        <h4 className='title'>{props.col.id}</h4>
        <div className='dots-menu'>
          <BiDotsHorizontalRounded size={35} />
        </div>
      </section>
      <hr></hr>
      <Droppable droppableId={props.col.id}>
        {(provided) => (
          <div className='column_list' ref={provided.innerRef}>
            {props.col.list.map((task, index) => (
              <Card key={task.id} text={task.name} index={index} />
            ))}
            {provided.placeholder}
            <Add_card openModal={props.openModal}></Add_card>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;