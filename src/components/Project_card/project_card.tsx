
import { Link } from 'react-router-dom';
import PlusImage from '../../assets/plus-solid.png';
import VectorImage from '../../assets/Vector.png';
import './project_card_style.scss'

interface ProjectCardProps {
    name:string
    progress: number
    id: number
    progress_string: string
}

export function ProjectCard(props:ProjectCardProps){

    return(
        <div className='card_wrapper'>
        <Link to={`/kanban/${props.id}/${props.name}`}>
          <div className='main_card'>
            <h4>{props.name}</h4>
            <div className='process_card_lower'>
            <h3>{props.progress_string}	</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${props.progress}%` }}></div>
            </div>

            </div>
            
          </div>
        </Link>
      </div>
        
    )
}