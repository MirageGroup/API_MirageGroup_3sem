import { useEffect, useState } from 'react'
import Column from '../Column/column'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
import './kanban_screen.scss'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { New_task } from '../New_task/New_task';
import TaskInterface from '../../Interfaces/Interfaces';

export default function Kanban_screen () {

    // PUXAR LISTA DE TASKS

    const params = useParams();
    let process_id = params.id
    let process_name = params.name
    const [tasks, setTasks] = useState<TaskInterface[]>([]);

    const fetchProcessInfo = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/task/${process_id}/getall`);
          return response.data;
        } catch (error) {
          console.error('Error fetching processes:', error);
          throw error;
        }
      };

    

    useEffect(() => {
        // Function to fetch and update processes
        const updateProcesses = async () => {
          try {
            const ProcessInfo: TaskInterface[] = await fetchProcessInfo();           
            setTasks(ProcessInfo)           
            const initialColumns = {
              todo: { id: 'todo', list: ProcessInfo.filter(tasks=> tasks.state === 'todo') },
              doing: { id: 'doing', list: ProcessInfo.filter(task => task.state === 'doing') },
              done: { id: 'done', list: ProcessInfo.filter(task => task.state === 'done') },
            };
            setColumns(initialColumns);

          } catch (error) {
            // Handle any errors
          }
        };
      
        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(updateProcesses, 1000);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(pollInterval);
      }, []); // The empty dependency array ensures this effect runs only once on component mount





  const initialColumns: { [key: string]: { id: string, list: TaskInterface[] } }= {
    todo: {
      id: 'todo',
      list: []	
    },
    doing: {
      id: 'doing',
      list: []
    },
    done: {
      id: 'done',
      list: []
    }
  }
  const [columns, setColumns] = useState(initialColumns)


  async function att_tasks(task: TaskInterface) {
    console.log(task)
    const response = await axios.patch(`http://localhost:8000/task/${process_id}/${task.id}/update`, task);
    console.log('Data sent successfully:', response.data);
  }

  const onDragEnd = async ({ source, destination }: DropResult) => {
    if (!destination) return; // If no valid destination, do nothing
  
    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];
    const draggedTask = sourceColumn.list[source.index];
  
    // Create new lists for source and destination columns
    const newSourceList = [...sourceColumn.list];
    const newDestinationList = [...destinationColumn.list];
  
    // Remove the task from the source list
    newSourceList.splice(source.index, 1);
  
    // Insert the task into the destination list
    newDestinationList.splice(destination.index, 0, draggedTask);
  
    // Update the state with the new lists
    setColumns(state => ({
      ...state,
      [sourceColumn.id]: { ...sourceColumn, list: newSourceList },
      [destinationColumn.id]: { ...destinationColumn, list: newDestinationList }
    }));
  
    try {
      await att_tasks({ ...draggedTask, state: destinationColumn.id }); // Update the task's column in the database
      console.log('Task column updated successfully');
    } catch (error) {
      console.error('Error updating task column:', error);
    }
  };

  
  //MODAL

  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };


  
  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <div className="background-wrapper_kanban">
              {/* title */}
              <div className='title-wrapper'> 
                  <h2 className='project-name'>{process_name}</h2>

                  {/* <div className='new-column-button'>
                    <New_column column_list={column_list} set_column = {set_column_list}></New_column>
                  </div> */}
              </div>
              <hr></hr>
        <div className='kanban_background'>
        {Object.values(columns).map(col => (
              <div key={col.id} className='column_wrapper'>
                <Column col={col} openModal={openModal} />

                {isModalOpen && (
                  <div className='form-wrapper'>
                    <New_task closeModal={closeModal} process_id={process_id}/>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </DragDropContext>
  )
}
