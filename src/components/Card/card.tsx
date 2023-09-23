import './card.scss'
import {BiSolidUserCircle} from 'react-icons/bi'
import {FaRegTrashCan} from 'react-icons/fa6'
import {AiFillFileAdd} from 'react-icons/ai'

export function Card () {
    return (
        <>
            <section className='super-container'>
                <div className='color'></div>

                <div className='card-container'>
                    
                    <div className='name-paragraph'><p>Nome do Card</p></div>
                    <div className='date'><p>dd/mm/aaaa hh:mm</p></div>
                    <div className='picture'><BiSolidUserCircle size={30}/></div>
                </div>

                <div className='icons-container'>
                    <div className='add-file'><AiFillFileAdd size={25}/></div>
                    <div className='trash'><FaRegTrashCan size={22}/></div>
                </div>
                
            </section>
        </>
    )
}