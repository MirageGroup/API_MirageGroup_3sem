
import { Link } from 'react-router-dom';
import PlusImage from '../../assets/plus-solid.png';
import VectorImage from '../../assets/Vector.png';
import './project_card_style.scss'
import { IoIosAnalytics, IoIosBookmark, IoIosCalendar, IoIosListBox, IoMdPerson } from 'react-icons/io';

interface ProjectCardProps {
    name:string
    deadline: string
    progress: number
    id: number
    progress_string: string
    users: number
}


function formatarData(data: string): string {
  const partes = data.split('-');
  
  const dia = partes[2];
  const mes = partes[1];
  const ano = partes[0];
  
  return `${dia}/${mes}/${ano}`;
}

export function ProjectCard(props:ProjectCardProps){
  console.log(props.users)

    return(
        <div className='card_wrapper'>
        <Link to={`/kanban/${props.id}/${props.name}`}>
          <div className='main_card'>
            <h4 className='projectName'>{props.name}</h4>
            <div className="infos">
              <h4><IoIosCalendar></IoIosCalendar> {formatarData(props.deadline)}</h4>
              <h4><IoMdPerson></IoMdPerson> {props.users}</h4>
            </div>
            <div className='process_card_lower'>
            <h3 className='deadline'><IoIosListBox></IoIosListBox> {props.progress_string}	</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${props.progress}%` }}></div>
            </div>

            </div>
            
          </div>
        </Link>
      </div>
        
    )
}