import { useState } from "react";
import { ProjectCard } from "../Project_card/project_card";
import './projects_screen_style.scss'
import { Process_card } from "../Process_Card/process_card";

export function ProjectScreen(){

    const lista_projetos = [
    { id: 1, name: "projeto1", finished: true },
    { id: 2, name: "projeto2", finished: true },
    { id: 3, name: "projeto3", finished: false },
    { id: 4, name: "projeto4", finished: true },
    { id: 5, name: "projeto5", finished: true },
    { id: 1, name: "projeto1", finished: true },
    { id: 2, name: "projeto2", finished: true },
    { id: 3, name: "projeto3", finished: false },
    { id: 4, name: "projeto4", finished: true },
    { id: 5, name: "projeto5", finished: false },
    { id: 1, name: "projeto1", finished: true },
    { id: 2, name: "projeto2", finished: true },
    { id: 3, name: "projeto3", finished: false },
    { id: 4, name: "projeto4", finished: true },
    { id: 5, name: "projeto5", finished: true },
    { id: 1, name: "projeto1", finished: true },
    { id: 2, name: "projeto2", finished: true },
    { id: 3, name: "projeto3", finished: false },
    { id: 4, name: "projeto4", finished: true },
    { id: 5, name: "projeto5", finished: false },
    
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
                <p>aqui você pode ver todas as listas de projetos</p>
                <button onClick={openModal}>criar projeto</button>

            </div>
            <div className="list_container">
                <h3>Em andamento</h3>
                <span></span>
                <div className="project_list">
                    {lista_projetos.map(
                        (projeto) => projeto.finished? <ProjectCard name={projeto.name}></ProjectCard>:null  
                        )
                    }
            </div>

            </div>

            <div className="list_container">
                <h3>Concluidos</h3>
                <span></span>
                <div className="project_list">
                    {lista_projetos.map(
                        (projeto) => projeto.finished?null: <ProjectCard name={projeto.name}></ProjectCard>  
                        )
                    }
                </div>

            </div>

            {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCenter">
                        <div className="modal">
                        <Process_card></Process_card>
                        <button onClick={closeModal}>Fechar Modal</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}