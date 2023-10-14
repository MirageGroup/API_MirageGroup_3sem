import './add_card.scss'
import {AiFillFileAdd} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'

interface AddCardProps {
    onAddClick: () => void;
}

export function Add_card({onAddClick}: AddCardProps) {
    
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <button className="add-button" onClick={onAddClick}>
                        <div className='plus-icon'><AiOutlinePlus size={30} /></div>
                        <p className='text'>adicionar nova tarefa</p>
                    </button>

                    <button className='file-button'>
                        <AiFillFileAdd size={22}/>
                    </button>
                </div>
                
            </div>
        </>
    )
}