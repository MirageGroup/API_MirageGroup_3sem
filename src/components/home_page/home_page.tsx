import './home_page.scss'
import * as FaIcons from "react-icons/fa";

export function Home_page(){

    return(
        <div className="home_wrapper">
            <div className='main_title'>
                <h1>Bem Vindo</h1>
                <h2>Crie e monitore projetos</h2>
                <FaIcons.FaCheckCircle></FaIcons.FaCheckCircle>

            </div>
        </div>
    )
}