import './New_task.scss';
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

interface props {
    closeModal : () => void;
    process_id:any;
    column_length:number;
    contributors: any[]
}

export function New_task(props : props) {    

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [limitDate, setLimitDate] = useState('');
    const [priority, setPriority] = useState('verde')
    const [contributors, setContributors] = useState([])    
    const [evidence, setEvidence] = useState(false)    
    
    const processContributors = props.contributors    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const contributorUsers = contributors.map(item => ({ id: item.value }));

        console.log(props.column_length)
        const data = {
            name: taskName,
            description: description,
            has_evidence: evidence,
            deadline: limitDate, 
            priority:priority,
            state: 'todo',
            list_index:props.column_length + 1,
            users: contributorUsers 
        };
        console.log("payload",data)
      try {
        const response = await axios.post(`http://localhost:8000/task/${props.process_id}/create`, data);
        console.log('Data sent successfully:', response.data);
        props.closeModal()
        
        // Optionally, reset the form fields and state
        setTaskName('');
        setLimitDate('');
        setDescription('');
        setPriority('')
      } catch (error) {
        props.closeModal()
        console.error('Error sending data:', error);
      }

      
    };
    

    return (
        <>
            <div className='form-container'>
                <div className='form-title'><h3>Nova Tarefa</h3></div>
                <button className='close-button-form' onClick={props.closeModal}><IoMdClose size={35} className='button'/></button>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="task-name" className='task-name'  placeholder='Nome da tarefa' onChange={(e) => setTaskName(e.target.value)}  required/>

                    <UsersSelect selectedOptions={contributors} setSelectedOptions={setContributors} options={processContributors} placeholder={"Escolha os contribuidores"} />
                    

                    <label >Nível de Prioridade</label>
                    
                    <select
                        className="priority_Dropdown"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required 
                    >
                        <option value="verde">Baixo</option>
                        <option value="amarelo">Razoavel</option>
                        <option value="vermelho">Alto</option>
                    </select>

                    <EvidenceCheckbox setEvidence={setEvidence} />

                    <div className='date-container'>
                        <label>Data Limite:</label>
                        <input type="date" onChange={(e) => setLimitDate(e.target.value)} required  />
                    </div>

                    <textarea placeholder='Descrição' rows={5} cols={30} onChange={(e) => setDescription(e.target.value)}></textarea>
                    
                    <button type ="submit" className='submit-button' >Adicionar Tarefa</button>
                </form>
            </div>
            
        </>
    )
}

const UsersSelect = (props) => {

    const selectedOptions = props.selectedOptions
    const setSelectedOptions = props.setSelectedOptions
    const options = props.options.map(item => ({ value: item.id, label: item.name }));

    const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    return (
        <div>
            <label>Contribuidores</label>
            <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleSelectChange}
                className='contributor_select'
                placeholder={props.placeholder}
                id='contributors'
            />
        </div>
    );
};

const EvidenceCheckbox = (props) => {

    const [isChecked, setChecked] = useState(false)
    const setEvidence = props.setEvidence
  
    const handleCheckboxChange = () => {
        setChecked(!isChecked)
        setEvidence(!isChecked);
    };
  
    return (
      <div className='evidence_checkbox'>
        <label>Evidência</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
      </div>
    );
  }