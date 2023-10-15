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
                <h2>Bem Vindo ao</h2>
                <h1>SHORTS</h1>
                <h2>Soluções para Heuristicas Organizadas em Projetos</h2>
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
                        <Process_card close_modal_function = {closeModal}></Process_card>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}