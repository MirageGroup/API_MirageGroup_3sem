import './New_task.scss';
import {AiOutlineClose} from 'react-icons/ai'

export function New_task() {
    return (
        <>
            
            <div className='form-container'>
                <div className='form-title'><h3>Nova Tarefa</h3></div>
                <div className='close-button'><AiOutlineClose size={30}/></div>
                <form>
                    <input type="text" name="task-name" className='task-name'  placeholder='Nome da tarefa'/>
                    <input type="text" name="responsible-name" className='responsible-name' placeholder='Responsável principal'/>
                    <label>Nível de Prioridade</label>
                    <div className='priority-buttons'>
                        <input type="radio" id="verde" name="prioridade" value="verde"/>
                        <label className="green" ></label>
            
                        <input type="radio" id="amarelo" name="prioridade" value="amarelo"/>
                        <label className="yellow" ></label>
                        
                        <input type="radio" id="vermelho" name="prioridade" value="vermelho"/>
                        <label className="red" ></label>
                    </div>
                    <div className='date-container'>
                        <label>Data Limite:</label>
                        <input type="date" />
                    </div>
                    <textarea placeholder='Descrição' rows={23} cols={30}></textarea>
                </form>
            </div>
        </>
    )
}