import {IoMdClose} from 'react-icons/io'
import './kanban_screen.scss'
import { Column } from '../Column/column'
import { New_column } from '../New_column/new_column'
import { New_task } from '../New_task/New_task'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'



export function Kanban_screen () {

    const params = useParams();

    let process_id = params.id

    const [tasks, setTasks] = useState<any[]>([]);

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

          } catch (error) {
            // Handle any errors
          }
        };
      
        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(updateProcesses, 1000);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(pollInterval);
      }, []); // The empty dependency array ensures this effect runs only once on component mount


    const [column_list, set_column_list] = useState([{nome:"A fazer"}, {nome:"Fazendo"}, {nome:"Feito"}]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="background-wrapper_kanban">
            {/* title */}
            <div className='title-wrapper'> 
                <h2 className='project-name'>{params.name}</h2>

                <div className='new-column-button'>
                  <New_column column_list={column_list} set_column = {set_column_list}></New_column>
                </div>
            </div>

            {/* content */}
            <div className='content-wrapper'>

                {column_list.map((item, index) => (<Column nome={item.nome} openModal={openModal} tasks={tasks}  key={index}></Column>))}


                {isModalOpen && (
                    <div className='form-wrapper'>
                        <New_task closeModal={closeModal} process_id={process_id}></New_task>
                    </div>
                )}
            </div>
        </div>
    )
}