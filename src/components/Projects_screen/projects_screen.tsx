import { ProjectCard } from "../Project_card/project_card";
import './projects_screen_style.scss'

export function ProjectScreen(){

    const lista_projetos = ["projeto1","projeto2","projeto3","projeto4"]

    return(
        <div className="screen_wrapper">
            <h3>não finalizados</h3>
            <div className="project_list">
                {lista_projetos.map(
                    (e) => <ProjectCard name={e}></ProjectCard>
                    )
                }
            </div>
            
        </div>
    )
}