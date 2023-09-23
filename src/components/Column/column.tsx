import { useState } from 'react';
import './column.scss';
import {Add_card} from '../Add_card/add_card';
import {Card} from '../Card/card'

export function Column ({nome}) {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = (e) => {
        const element = e.target;
        const scrollHeight = element.scrollHeight - element.clientHeight;
        const percentage = (element.scrollTop / scrollHeight) * 100;
        setScrollPercentage(percentage);
    };
    
    return (
        <>
            <div className='container' onScroll={handleScroll}>
                <section className='title-container'>
                    <h4 className='title'>{nome}</h4>
                </section>
                <div className='card-container'>

                    <div className='card-wrapper'>
                        <Card></Card>
                    </div>
                </div>
            </div>
        </>
    )
}