import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/card';
import './column.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Add_card } from '../Add_card/add_card';
import TaskInterface from '../../Interfaces/Interfaces';

interface ColumnProps {
  col: {
    name: string;
    id: string;
    list: TaskInterface[];
  };
  openModal: () => void;
  openModalCard: (task: TaskInterface|null) => void;
}

const Column: React.FC<ColumnProps> = (props) => {
  return (
    <div className='column_container'>
      <section className='title-container'>
        <h4 className='column_title'>{props.col.name}</h4>
        <div className='dots-menu'>
          <BiDotsHorizontalRounded size={35} />
        </div>
      </section>
      <hr></hr>
      <Droppable droppableId={props.col.id}>
        {(provided) => (
          <div className='column_list' ref={provided.innerRef}>
            {props.col.list.map((task, index) => (
              <Card key={task.id} text={task.name} openModalCard={props.openModalCard} index={index} task={task} />
            ))}
            {provided.placeholder}
            {props.col.id === 'todo' && <Add_card openModal={props.openModal} />}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;