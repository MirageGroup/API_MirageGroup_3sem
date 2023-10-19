import './Confirm_delete.scss'

interface Confirm_delete_interface{
    delete_function : () => void;
    close_confirm_modal: () => void
    delete_name:string
}


export default function Confirm_delete(props:Confirm_delete_interface){



    return(
        <div className='confirm_delete_wrapper'>
            <h1>Tem certeza de deletar {props.delete_name}</h1>
            <div className='confirm_buttons'>
                <button  style={{ backgroundColor: ' #CCCCCC' }}  onClick={() => props.close_confirm_modal()}>Cancelar</button>
                <button style={{ backgroundColor: ' #ff00008f' }} onClick={() => props.delete_function()}>Deletar</button>

            </div>
        </div>
    )
}