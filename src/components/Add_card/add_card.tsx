import './add_card.scss'
import {AiOutlinePlus} from 'react-icons/ai'
export function Add_card() {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <AiOutlinePlus size={35} className='plus-icon'/>
                    <p className='text'>Adicionar card</p>
                </div>
            </div>
        </>
    )
}