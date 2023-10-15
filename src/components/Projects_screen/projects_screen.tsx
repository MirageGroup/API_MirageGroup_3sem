import { useEffect, useState } from "react";
import { ProjectCard } from "../Project_card/project_card";
import './projects_screen_style.scss'
import { Process_card } from "../Process_Card/process_card";
import * as FaIcons from "react-icons/fa";
import { FiX } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";


interface process{
  "id": string,
  "name": string,
  "description": string,
  "created_at": string,
  "updated_at": string,
  "deadline": string,
  "state": string,
  "deleted_at": null,
  "progress":number|null
  "tasks": 
    {
      "name": string
      "description": string,
      "deadline": string,
      "state": string,
      "deleted_at": null,
      "id": number,
      "created_at": string,
      "updated_at": string
    }[]
    
  
}



export function ProjectScreen(){


    // função para definir porcentagem de progresso para todos

    function calculate_progress(process_list:process[]){
      process_list.forEach((process) => {
        const totalTasks = process.tasks.length;
        const completedTasks = process.tasks.filter((task: { state: string; }) => task.state === "completo").length;
        
        if (totalTasks > 0) {
          const progress = (completedTasks / totalTasks) * 100;
          process.progress = progress
        } else {
        }
      });
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
            const updatedProcesses = await fetchProcesses();
            calculate_progress(updatedProcesses)
            // updatedProcesses = 

            setProcesses(updatedProcesses);
          } catch (error) {
            // Handle any errors
          }
        };
      
        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(updateProcesses, 1000);
      
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
                        (projeto) => projeto.progress != 100? <ProjectCard name={projeto.name} progress={projeto.progress} id={projeto.id}></ProjectCard>:null  
                        )
                    }
            </div>

            </div>

            <div className="list_container">
                <h3>Concluidos</h3>
                <span></span>
                <div className="project_list">
                    {processes.map(
                         (projeto) => projeto.progress == 100? <ProjectCard name={projeto.name} progress={projeto.progress} id={projeto.id}></ProjectCard>:null  
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