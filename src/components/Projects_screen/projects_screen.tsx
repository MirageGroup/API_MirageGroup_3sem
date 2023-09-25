import { useEffect, useState } from "react";
import { ProjectCard } from "../Project_card/project_card";
import './projects_screen_style.scss'
import { Process_card } from "../Process_Card/process_card";
import * as FaIcons from "react-icons/fa";
import { FiX } from "react-icons/fi";
import axios from "axios";

export function ProjectScreen(){





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
            setProcesses(updatedProcesses);
          } catch (error) {
            // Handle any errors
          }
        };
      
        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(updateProcesses, 300);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(pollInterval);
      }, []); // The empty dependency array ensures this effect runs only once on component mount
    

      const finished_process = [
        {name: "projeto opera"},
        {name: "projeto blues"},
        {name: "projeto sky"},
        {name: "projeto flag"},
      ]

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
                        (projeto) =><ProjectCard name={projeto.name}></ProjectCard>
                        )
                    }
            </div>

            </div>

            <div className="list_container">
                <h3>Concluidos</h3>
                <span></span>
                <div className="project_list">
                    {finished_process.map(
                        (projeto) => <ProjectCard name={projeto.name}></ProjectCard>  
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