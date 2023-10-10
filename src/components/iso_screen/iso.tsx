import './iso_style.scss'
import PlusImage from '../../assets/plus-solid.png';
import { Process_card } from '../Process_Card/process_card';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { IsoForm } from '../isoFormulary/isoForm';
import {BsPlus} from 'react-icons/bs'
import axios from 'axios';

export function IsoScreen(){

    const [iso_list,set_iso_list] = useState<any[]>([])

    const fetchProcesses = async () => {
        try {
          const response = await axios.get('http://localhost:8000/iso/getall');
          return response.data;
        } catch (error) {
          console.error('Error fetching processes:', error);
          throw error;
        }
      };


    useEffect(() => {
        // Function to fetch and update processes
        const updateisos = async () => {
          try {
            const updatedList = await fetchProcesses();
            set_iso_list(updatedList);
          } catch (error) {
            // Handle any errors
          }
        };
      
        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(updateisos, 300);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(pollInterval);
      }, []); // The empty dependency array ensures this effect runs only once on component mount



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


      function handle_iso_click(iso_name: string,iso_description: string,index:number){
        set_iso_selected({"nome": iso_name,"descricao": iso_description,index})

      }


    return(

        <div className="iso_screen_wrapper">

            <div className="iso_list_container">
                <div className='iso_list'>
                    <button onClick={openModal}>
                        <BsPlus size = {35}></BsPlus>
                    </button>
                    {iso_list.map((iso_card, index) => (
                        <div  key={index} className={`iso_card ${iso_selected.index === index ? 'selected' : ''}`} onClick={() => handle_iso_click(iso_card.nome, iso_card.descricao,index)}>
                            <div className='iso_card_title'></div>
                                <h3>{iso_card.name}</h3>
                                <hr></hr>
                            <p>{iso_card.description}</p>
                            </div>

                            ))}
                </div>
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
