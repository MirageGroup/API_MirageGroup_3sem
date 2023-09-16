import { useState } from 'react';
import './column.scss'

export function Column () {

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
                    <h4 className='title'>A Fazer</h4>
                </section>
                <div className='card-container'>
                    <div className='card-wrapper'>
                    
                    </div>
                </div>
            </div>
        </>
    )
}