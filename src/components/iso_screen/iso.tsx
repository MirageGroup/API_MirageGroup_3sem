import './iso_style.scss'
import PlusImage from '../../assets/plus-solid.png';
import { Process_card } from '../Process_Card/process_card';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import { IsoForm } from '../isoFormulary/isoForm';

export function IsoScreen(){

    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };


    return(

        <div className="iso_screen_wrapper">
            <div className='iso_list'>
                <button onClick={openModal}>
                    <img src={PlusImage}></img>
                </button>
                <div className='iso_card'>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
                <div className='iso_card'>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
                <div className='iso_card'>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
                <div className='iso_card'>
                    <div className='iso_card_title'></div>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
            </div>

            <div className='iso_selected'>
                <h1>ISO SELECIONADA</h1>
                <p>Descrição de iso selecionada</p>
            </div>

            {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCenter">
                        <div className="modal">
                            <div className="modal_icons">
                                <FiX onClick={closeModal} size={30}></FiX>
                            </div>
                            <IsoForm close_modal_function = {closeModal}></IsoForm>
                        </div>
                    </div>
                </div>
            )}
            
        </div>


    )
}
