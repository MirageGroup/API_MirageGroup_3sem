import './iso_style.scss'
import PlusImage from '../../assets/plus-solid.png';
import { Process_card } from '../Process_Card/process_card';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import { IsoForm } from '../isoFormulary/isoForm';

export function IsoScreen(){

    const [iso_selected, set_iso_selected] = useState<{ nome: string; descricao: string,index:number}>({
        nome: 'Selecione uma iso',
        descricao: '',
        index:0
      });


    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      let iso_list = [
        
            {'nome': "iso 1", "descricao": "descricao 1"},
            {'nome': "iso 2", "descricao": "descricao 1"},
            {'nome': "iso 3", "descricao": "descricao 1"},
            {'nome': "iso 4", "descricao": "descricao 1"},
        
      ]

      function handle_iso_click(iso_name: string,iso_description: string,index:number){
        set_iso_selected({"nome": iso_name,"descricao": iso_description,index})

      }


    return(

        <div className="iso_screen_wrapper">
            <div className='iso_list'>
                <button onClick={openModal}>
                    <img src={PlusImage}></img>
                </button>
                {iso_list.map((iso_card, index) => (
                       <div  key={index} className={`iso_card ${iso_selected.index === index ? 'selected' : ''}`} onClick={() => handle_iso_click(iso_card.nome, iso_card.descricao,index)}>
                         <div className='iso_card_title'></div>
                            <h3>{iso_card.nome}</h3>
                            <hr></hr>
                         <p>{iso_card.descricao}</p>
                        </div>

                        ))}
            </div>

            <div className='iso_selected'>
                <h1>{iso_selected.nome}</h1>
                <p>{iso_selected.descricao}</p>
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
