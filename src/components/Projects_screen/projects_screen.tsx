import { useEffect, useState } from "react";
import { ProjectCard } from "../Project_card/project_card";
import './projects_screen_style.scss'
import { Process_card } from "../Process_Card/process_card";
import * as FaIcons from "react-icons/fa";
import { FiX } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import ProcessInterface from '../../Interfaces/Interfaces'



export function ProjectScreen(){


    // função para definir porcentagem de progresso para todos

    function calculate_progress(process_list:ProcessInterface[]){
      process_list.forEach((process) => {
        const totalTasks = process.tasks.length;
        const completedTasks = process.tasks.filter((task: { state: string; }) => task.state === "done").length;
        
        if (totalTasks > 0) {
          const progress = (completedTasks / totalTasks) * 100;
          const progressString = `${completedTasks}/${totalTasks}`;
          process.progress_string = progressString
          process.progress = progress
        }
        else {
          process.progress_string = "0/0"
          process.progress = 0
        } 

        
      }
      
      );
      return process_list
    }


    const fetchProcesses = async () => {
        try {
          const response = await axios.get('http://localhost:8000/process/findall');
          return response.data;
        } catch (error) {
          console.error('Error fetching processes:', error);
          throw error;
        }
      };

    const [processes, setProcesses] = useState<any[]>([]);

    useEffect(() => {
        // Function to fetch and update processes
        const updateProcesses = async () => {
          try {
            let updatedProcesses = await fetchProcesses();
            updatedProcesses = calculate_progress(updatedProcesses)
            setProcesses(updatedProcesses);
          } catch (error) {
            // Handle any errors
          }
        };
      
        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(updateProcesses, 500);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(pollInterval);
      }, []); // The empty dependency array ensures this effect runs only once on component mount
    


    const [isModalOpen, setIsModalOpen] = useState(false); 

    


    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };



    return(
        <div className="screen_wrapper">

            <div className="screen_title">
                <h1>Bem vindo a lista de projetos</h1>
                <p>Aqui você pode ver todas as listas de projetos</p>
                <button onClick={openModal}>Criar projeto</button>

            </div>
            <div className="list_container">
                <h3>Em andamento</h3>
                <span></span>
                <div className="project_list">

                    {processes.map(
                        (projeto,index) => projeto.progress != 100? <ProjectCard key={index} progress_string={projeto.progress_string}	 name={projeto.name} progress={projeto.progress} id={projeto.id}></ProjectCard>:null  
                        )
                    }
            </div>

            </div>

            <div className="list_container">
                <h3>Concluidos</h3>
                <span></span>
                <div className="project_list">
                    {processes.map(
                         (projeto) => projeto.progress == 100? <ProjectCard progress_string={projeto.progress_string} name={projeto.name} progress={projeto.progress} id={projeto.id}></ProjectCard>:null
                        )
                    }
                </div>

            </div>

            {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCenter">
                        <div className="modal">
                            <div className="modal_icons">
                                <FiX onClick={closeModal} size={30}></FiX>
                            </div>
                            <Process_card close_modal_function = {closeModal}></Process_card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}