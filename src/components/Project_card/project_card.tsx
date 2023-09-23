
import PlusImage from '../../assets/plus-solid.png';
import VectorImage from '../../assets/Vector.png';
import './project_card_style.scss'

interface ProjectCardProps {
    name:string
}

export function ProjectCard(props:ProjectCardProps){
    return(
        <div className='card_wrapper'>
            <div className='main_card'>
                <div className="icons">
                    <img src={PlusImage}></img>
                    <img src={VectorImage}></img>
                </div>
                
            </div>
            
            <h4>{props.name}</h4>
        </div>
        
    )
}