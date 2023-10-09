import { AiOutlinePlus } from 'react-icons/ai'
import './new_column.scss'

export function New_column () {
    return (
        <>
            <button className='button-wrapper'>
                <div className='plus-icon'><AiOutlinePlus size={30} /></div>
                <p className='text'>nova coluna</p>
            </button>
        </>
    )
}