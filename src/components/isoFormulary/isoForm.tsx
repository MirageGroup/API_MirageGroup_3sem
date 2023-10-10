
import { useState } from 'react'
import './isoFormStyle.scss'
import axios from 'axios';

export function IsoForm({close_modal_function}:any){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async () => {

        close_modal_function()

        const data = {
            name: name,
            description: description

        };
      console.log(data)
  
      try {
        close_modal_function()

        console.log(data)
        const response = await axios.post('http://localhost:8000/iso/create', data);
        console.log('Data sent successfully:', response.data);
  
        // Optionally, reset the form fields and state
        setName('');
        setDescription('');
      } catch (error) {
        console.error('Error sending data:', error);
        close_modal_function()
      }

      
    };

    return(
    <div className="iso_form_wrapper">
            <h2>Cadastro de um novo processo</h2>
            <hr></hr>
            <form action="#" method="post" className='iso_form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome da ISO:</label>
                    <input type="text" id="nome" name="nome" required onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição da ISO:</label>
                    <textarea id="descricao" name="descricao" required onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Cadastrar ISO</button>
                </div>
            </form>
     </div>
    )
}