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
            const ProcessInfo = await fetchProcessInfo();
            setTasks(ProcessInfo)
            console.log(tasks)

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
      list: tasks
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

  console.log(columns)

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

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      }

      // Update the state
      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      }

      // Make a new end list array
      const newEndList = end.list

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index])

      // Create a new end column
      const newEndCol = {
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


  
  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <div className="background-wrapper_kanban">
              {/* title */}
              <div className='title-wrapper'> 
                  <h2 className='project-name'>Kanban Screen</h2>

                  {/* <div className='new-column-button'>
                    <New_column column_list={column_list} set_column = {set_column_list}></New_column>
                  </div> */}
              </div>
              <hr></hr>
        <div className='kanban_background'>
            {Object.values(columns).map(col => (
              <Column col={col} key={col.id} openModal={openModal} />
            ))}
            {isModalOpen && (
                    <div className='form-wrapper'>
                        <New_task closeModal={closeModal} process_id={process_id}></New_task>
                    </div>
              )}
        </div>
      </div>
    </DragDropContext>
  )
}
