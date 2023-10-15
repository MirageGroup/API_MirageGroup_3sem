import './dropdown_menu.scss'
import { useState } from 'react';

interface props {
    opensMenu: () => void;
}

export function Dropdown_menu(props: props) {

    const options_list = [{nome: 'Renomear Coluna'}, {nome: 'Arquivar Coluna'}, {nome: 'Excluir Coluna'}];

    return (
        <>
            <ul className='kanban_list'>
                {options_list.map ((item, index) => (
                <li key={index} onClick={props.opensMenu}>{item.nome}</li>
                ))}
            </ul>
        </>
    )
}

