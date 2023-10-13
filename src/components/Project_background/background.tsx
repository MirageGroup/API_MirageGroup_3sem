import {IoMdClose} from 'react-icons/io'
import './background.scss'
import { Column } from '../Column/column'
import { New_column } from '../New_column/new_column'
import { New_task } from '../New_task/New_task'

export function Background () {
    
    

    return (
        <body className="background-wrapper">
            {/* title */}
            <div className='title-wrapper'> 
                <p className='project-name'>Projeto 1</p>

                <div className='new-column-button'><New_column></New_column></div>
            </div>
            {/* close button */}
            <button className='close-button'>
                <IoMdClose size={40} className='button'/>
            </button>
            {/* content */}
            <div className='content-wrapper'>
                <Column nome="A fazer"></Column>
                <Column nome="A fazer"></Column>
                <Column nome="A fazer"></Column>
                <Column nome="A fazer"></Column>

                <div className='form-wrapper'>
                    <New_task></New_task>
                </div>
            </div>
        </body>
    )
}