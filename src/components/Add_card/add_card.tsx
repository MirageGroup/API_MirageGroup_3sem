import './add_card.scss'
import {AiFillFileAdd} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
export function Add_card() {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className="add-button">
                        <div className='plus-icon'><AiOutlinePlus size={30} /></div>
                        <p className='text'>adicionar nova tarefa</p>
                    </div>

                    <button className='trash-button'>
                        <AiFillFileAdd size={25}/>
                    </button>
                </div>
                
            </div>
        </>
    )
}