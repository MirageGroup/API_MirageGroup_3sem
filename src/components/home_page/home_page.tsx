import './home_page.scss'
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Process_card } from "../Process_Card/process_card";
import { FiX } from "react-icons/fi";

export function Home_page(){

    const [isModalOpen, setIsModalOpen] = useState(false); 


    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    return(
        <div className="home_wrapper">
            <div className='main_title'>
                <h1>Bem Vindo</h1>
                <h2>Crie e monitore projetos</h2>
                <FaIcons.FaCheckCircle></FaIcons.FaCheckCircle>
                <button onClick={openModal}>Criar novo projeto</button>

            </div>
            
            {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalCenter">
                        <div className="modal">
                            <div className="modal_icons">
                                <FiX onClick={closeModal} size={30}></FiX>

                            </div>
                        <Process_card></Process_card>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}