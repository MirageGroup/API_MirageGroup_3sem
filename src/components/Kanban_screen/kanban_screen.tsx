import {IoMdClose} from 'react-icons/io'
import './kanban_screen.scss'
import { Column } from '../Column/column'
import { New_column } from '../New_column/new_column'
import { New_task } from '../New_task/new_task'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export function Background () {
    
    const [column_list, set_column_list] = useState([{nome:"a fazer"}, {nome:"fazendo"}, {nome:"feito"}]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <body className="background-wrapper">
            {/* title */}
            <div className='title-wrapper'> 
                <p className='project-name'>Projeto 1</p>

                <div className='new-column-button'><New_column column_list={column_list} set_column = {set_column_list}></New_column></div>
            </div>
            {/* close button */}
            <button className='close-button'>
                <IoMdClose size={40} className='button'/>
            </button>
            {/* content */}
            <div className='content-wrapper'>

                {column_list.map((item, index) => (<Column nome={item.nome} openModal={openModal}  key={index}></Column>))}


                {isModalOpen && (
                    <div className='form-wrapper'>
                        <New_task closeModal={closeModal}></New_task>
                    </div>
                )}
            </div>
        </body>
    )
}