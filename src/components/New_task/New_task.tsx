import './New_task.scss';
import {AiOutlineClose} from 'react-icons/ai'

export function New_task() {
    return (
        <>
            
            <div className='form-container'>
                <div className='form-title'><h3>Nova Tarefa</h3></div>
                <div className='close-button'><AiOutlineClose size={20}/></div>
                <form>
                    <input type="text" name="task-name" className='task-name'  placeholder='Nome da tarefa'/>
                    <input type="text" name="responsible-name" className='responsible-name' placeholder='Responsável principal'/>
                    <label>Nível de Prioridade</label>
                    <div className='priority-buttons'>
                        <input type="radio" id="verde" name="prioridade" value="verde"/>
                        <label className="verde" ></label>
            
                        <input type="radio" id="amarelo" name="prioridade" value="amarelo"/>
                        <label className="amarelo" ></label>
                        
                        <input type="radio" id="vermelho" name="prioridade" value="vermelho"/>
                        <label className="vermelho" ></label>
                    </div>
                    <div className='date-container'>
                        <label>Data Limite:</label>
                        <input type="date" />
                    </div>
                    <textarea placeholder='Descrição' rows={15} cols={30}>

                    </textarea>
                </form>
            </div>
        </>
    )
}