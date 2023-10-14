import {IoMdClose} from 'react-icons/io'
import './background.scss'
import { Column } from '../Column/column'
import { New_column } from '../New_column/new_column'
import { New_task } from '../New_task/New_task'
import { useState } from 'react'

export function Background () {
    
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleToggleForm  = () => {
        setIsFormVisible(!isFormVisible);
    }
      
    const colunas = [{nome:"a fazer"}, {nome:"fazendo"}, {nome:"feito"}, {nome:"fazendo2"}]
    
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
                {colunas.map((item, index) => (<Column nome={item.nome} key={index}></Column>))}
                
        

                {isFormVisible && (
                    <div className='form-wrapper'>
                        <New_task onCloseForm={handleToggleForm}></New_task>
                    </div>
                )}

                
            </div>
        </body>
    )
}