import {GrClose} from 'react-icons/gr'
import './background.scss'

export function Background () {
    return (
        <body className="background-wrapper">
            {/* title */}
            <section><p className='project-name'>Projeto #1</p></section>
            {/* close button */}
            <div>
                <GrClose size={40} className='button'/>
            </div>
            {/* content */}
            <div>
            
            </div>
        </body>
    )
}