import { useEffect, useState } from 'react'
import Column from '../Column/column'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
import './kanban_screen.scss'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { New_task } from '../New_task/New_task';
import TaskInterface from '../../Interfaces/Interfaces';
import TaskDetailCard from '../TaskDetailCard/TaskDetailCard';
import { FiX } from 'react-icons/fi';

export default function Kanban_screen () {

    // PUXAR LISTA DE TASKS

    const params = useParams();
    let process_id = params.id
    let process_name = params.name
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [contributors, setContributors] = useState([])        

    const fetchProcessInfo = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/process/${process_id}/fetch`);          
          return response.data;
        } catch (error) {
          console.error('Error fetching processes:', error);
          throw error;
        }
      };

    useEffect(() => {
        const updateProcesses = async () => {
          try {
            const ProcessInfo = await fetchProcessInfo();           
            setTasks(ProcessInfo.tasks)
            setContributors(ProcessInfo.users)           
            const initialColumns = {
              todo: { id: 'todo',name: 'A fazer', list: ProcessInfo.tasks.filter(tasks=> tasks.state === 'todo').sort((a, b) => a.list_index - b.list_index) },
              doing: { id: 'doing',name: 'Em progresso', list: ProcessInfo.tasks.filter(task => task.state === 'doing').sort((a, b) => a.list_index - b.list_index) },
              done: { id: 'done',name: 'Finalizado', list: ProcessInfo.tasks.filter(task => task.state === 'done').sort((a, b) => a.list_index - b.list_index) },
            };
            setColumns(initialColumns);

          } catch (error) {
          }
        };
      
        updateProcesses()
        console.log("pegando")
        const pollInterval = setInterval(updateProcesses, 3000);
        return () => clearInterval(pollInterval);
      }, []);



console.log(tasks);


  const initialColumns: { [key: string]: { name: string; id: string, list: TaskInterface[] } }= {
    todo: {
      name: 'A fazer',
      id: 'todo',
      list: []	
    },
    doing: {
      name: 'Em progresso',
      id: 'doing',
      list: []
    },
    done: {
      name: 'Finalizado',
      id: 'done',
      list: []
    }
  }
  const [columns, setColumns] = useState(initialColumns)


  async function att_tasks(tasks: TaskInterface[]) {
    try {
      const updateTasksPromises = tasks.map(async (task) => {
        const response = await axios.patch(
          `http://localhost:8000/task/${process_id}/${task.id}/update`,
          task
        );
        console.log('Data sent successfully for task with ID', task.id, ':', response.data);
        return response.data;
      });
  
      await Promise.all(updateTasksPromises);
      console.log('All tasks updated successfully');
    } catch (error) {
      console.error('Error updating tasks:', error);
    }
  }
  
  

  const onDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index])

      newList.forEach((task, index) => {
        task.list_index = index;
      });

      att_tasks(newList)

      // Then create a new copy of the column object
      const newCol = {
        name:start.name,
        id: start.id,
        list: newList
      }

      // Update the state
      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null


    } 
    else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      newStartList.forEach((task, index) => {
        task.list_index = index;
      });

      att_tasks(newStartList)

      // Create a new start column
      const newStartCol = {
        name:start.name,
        id: start.id,
        list: newStartList
      }

      // Make a new end list array
      const newEndList = end.list

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index])

      newEndList.forEach((task, index) => {
        task.state = end.id
        task.list_index = index;
      });

      att_tasks(newEndList)

      // Create a new end column
      const newEndCol = {
        name:end.name,
        id: end.id,
        list: newEndList
      }

      // Update the state
      setColumns(state => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }))
      return null
    }
  }
  
  //MODAL

  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };


    // CARD DETAILS MODAL

    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TaskInterface | null>(null);
    const openModalCard = (task: TaskInterface|null) => {
      console.log("openModalCard", task)
      if (task !== null){
        setSelectedTask(task);
      } 
        setIsCardModalOpen(true);
    };
    
    const closeModalCard = () => {
        setIsCardModalOpen(false);
    };





  
  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <div className="background-wrapper_kanban">
              {/* title */}
              <div className='back'>
                <Link to='/home'>
                  <button>Voltar</button>
                </Link>
              
              </div>
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
                <Column col={col} openModal={openModal}  openModalCard={openModalCard}/>

                {isModalOpen && (
                  <div className='form-wrapper'>
                    <New_task closeModal={closeModal} column_length={columns.todo.list.length} process_id={process_id} contributors={contributors}/>
                  </div>
                )}
              </div>
            ))}
        </div>
        {isCardModalOpen && (
          <div className="cardModalBackdrop">
            <div className="cardModalCenter">
                <div className="cardDetailModal">
                    <TaskDetailCard users={selectedTask.users} closeCardModal={closeModalCard} task={selectedTask}></TaskDetailCard>
                </div>
            </div>
          </div>
                  
                                
        )}
      </div>
      
    </DragDropContext>
  )
}
