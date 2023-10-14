import { AiOutlinePlus } from 'react-icons/ai'
import './new_column.scss'
import { FiX } from 'react-icons/fi';
import { useState } from 'react';

export function New_column () {

    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <>
            <button className='button-wrapper' onClick={openModal}>
                <div className='plus-icon'><AiOutlinePlus size={30} /></div>
                <p className='text'>nova coluna</p>
            </button>

            {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCenter">
                        <div className="modal">
                            <div className="modal_icons">
                                <FiX onClick={closeModal} size={30}></FiX>
                            </div>
                            <div className="card_wrapper_new_column">
                                <h2>Criação de coluna</h2>
                                <hr></hr>   
                                <div className="column_name_form">
                                    <label htmlFor="input_nome">Nome da coluna</label>
                                    <input id="input_nome"></input>
                                </div>
                                <div className='button_line'></div>
                                <button className='button_cancel' onClick={closeModal}>Cancelar</button>
                                <button className='button_create_column' onClick={closeModal}>Criar coluna</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}