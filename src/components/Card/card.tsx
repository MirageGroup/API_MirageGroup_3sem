import './card.scss'
import {BiSolidUserCircle} from 'react-icons/bi'
import {FaRegTrashCan} from 'react-icons/fa6'

export function Card () {
    return (
        <>
            <div className='card-container'>
                <div className='color'></div>
                <div className='name-paragraph'><p>Nome do Card</p></div>
                <div className='date'><p>dd/mm/aaaa hh:mm</p></div>
                <div className='picture'><BiSolidUserCircle size={25}/></div>
                <div className='trash'><FaRegTrashCan size={25}/></div>
            </div>
        </>
    )
}