import './iso_style.scss'
import PlusImage from '../../assets/plus-solid.png';

export function IsoScreen(){
    return(

        <div className="iso_screen_wrapper">
            <div className='iso_list'>
                <button>
                    <img src={PlusImage}></img>
                </button>
                <div className='iso_card'>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
                <div className='iso_card'>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
                <div className='iso_card'>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
                <div className='iso_card'>
                    <div className='iso_card_title'></div>
                    <h3>ISO EXEMPLO</h3>
                    <hr></hr>
                    <p>iso descrição</p>
                </div>
            </div>

            <div className='iso_selected'>
                <h1>ISO SELECIONADA</h1>
                <p>Descrição de iso selecionada</p>
            </div>

            
        </div>


    )
}
