import {GrClose} from 'react-icons/gr'
import './background.scss'
import { Column } from '../Column/column'

export function Background ({label}) {
    return (
        <body className="background-wrapper">
            {/* title */}
            <section><p className='project-name'>{label}</p></section>
            {/* close button */}
            <div>
                <GrClose size={40} className='button'/>
            </div>
            {/* content */}
                <Column></Column>
            <div>
            
            </div>
        </body>
    )
}