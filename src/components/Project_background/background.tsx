import {GrClose} from 'react-icons/gr'
import './background.scss'
import { Column } from '../Column/column'

export function Background () {
    return (
        <body className="background-wrapper">
            {/* title */}
            <section><p className='project-name'>Projeto 1</p></section>
            {/* close button */}
            <div>
                <GrClose size={40} className='button'/>
            </div>
            {/* content */}
                <Column nome="A fazer"></Column>
                <Column nome="Fazendo"></Column>
                <Column nome="Feito"></Column>
        </body>
    )
}