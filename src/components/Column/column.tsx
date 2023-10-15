import { useState } from 'react';
import './column.scss';
import {Add_card} from '../Add_card/add_card';
import {Card} from '../Card/card'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import { Dropdown_menu } from '../Dropdown_menu/dropdown_menu';
import TaskInterface from '../../Interfaces/Interfaces';

interface interfaceProps {
    nome:string,
    tasks:any
    openModal : () => void;
    
}

export function Column (props : interfaceProps) {
    let card_list = props.tasks

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const opensMenu = () => {setIsMenuOpen(!isMenuOpen)}
    

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = (e: any) => {
        const element = e.target;
        const scrollHeight = element.scrollHeight - element.clientHeight;
        const percentage = (element.scrollTop / scrollHeight) * 100;
        setScrollPercentage(percentage);
    };

    return (
        
        <>
            <div className='container' onScroll={handleScroll}>
                <section className='title-container'>
                    <h4 className='title'>{props.nome}</h4>
                    <div className='dots-menu'>
                        <BiDotsHorizontalRounded size={35} onClick={opensMenu}/>
                    </div>
                    
                </section>
                {isMenuOpen && <div className='menu-wrapper'><Dropdown_menu opensMenu={opensMenu}/></div>}
                <hr className='horizontal-line'/>
                <div className='card-container'>

                    <div className='card-wrapper'>
                        {props.nome == "a fazer"?card_list.map ((item:TaskInterface, index:number) => (<Card cardName={item.name} key={index}></Card>)):null}
                        <Add_card openModal={props.openModal}></Add_card>
                    </div>
                </div>
            </div>
        </>
    )
}