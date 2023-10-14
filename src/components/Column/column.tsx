import { useState } from 'react';
import './column.scss';
import {Add_card} from '../Add_card/add_card';
import {Card} from '../Card/card'
import {BiDotsHorizontalRounded} from 'react-icons/bi'

interface interfaceProps {
    nome:string,
    openModal : () => void;
    
}

export function Column (props : interfaceProps) {

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
                    <div className='dots-menu'><BiDotsHorizontalRounded size={35}/></div>
                    
                </section>
                <hr className='horizontal-line'/>
                <div className='card-container'>

                    <div className='card-wrapper'>
                        <Add_card openModal={props.openModal}></Add_card>
                    </div>
                </div>
            </div>
        </>
    )
}