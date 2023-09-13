import { ProjectCard } from "../Project_card/project_card";
import './projects_screen_style.scss'

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
    ]

    return(
        <div className="screen_wrapper">
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
            
            
            
        </div>
    )
}