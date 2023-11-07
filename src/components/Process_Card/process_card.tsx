import './process_card_style.scss'
import vetor from '../../assets/Vector.png';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';


export function Process_card({ close_modal_function }: any) {


    const [projectName, setProjectName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(''); // State for the start date
    const [endDate, setEndDate] = useState(''); // State for the end date
    const [contributors, setContributors] = useState([]);
    const [techleads, setTechleads] = useState([])

    const handleSubmit = async () => {

        const techleadUsers = techleads.map(item => ({ id: item.value }));
        const contributorUsers = contributors.map(item => ({ id: item.value }));

        const users = techleadUsers.concat(contributorUsers);

        console.log("users: ", users);

        const data = {
            name: projectName,
            description: description,
            deadline: endDate,
            state: "Não iniciado",
            users: users
        };
        console.log(data)

        try {
            close_modal_function()
            const response = await axios.post('http://localhost:8000/process/create', data);
            console.log('Data sent successfully:', response.data);

            // Optionally, reset the form fields and state
            setProjectName('');
            setResponsible('');
            setDescription('');
            setStartDate('');
            setEndDate('');
        } catch (error) {
            console.error('Error sending data:', error);
            close_modal_function()
        }

    };

    const [contributorsArray, setContributorsArray] = useState<any[]>([]);
    const [TechleadArray, setTechleadArray] = useState<any[]>([]);

    const fetchContributors = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user/fetchall')
            return response.data
        } catch (error) {
            console.log('Error fetching contributors', error);
        }
    }

    useEffect(() => {
        const updateUsers = async () => {
            try {
                let users = await fetchContributors();

                const contributorArray: any[] = [];
                const techLeadArray: any[] = [];

                users.forEach((item) => {
                    const roleId = item.role.id;
                    if (roleId == 4) {
                        contributorArray.push({ value: item.id, label: item.name });
                    } else if (roleId == 3) {
                        techLeadArray.push({ value: item.id, label: item.name });
                    }
                });

                setContributorsArray(contributorArray);
                setTechleadArray(techLeadArray);
            } catch (error) {
                console.log(error);
            }
        };

        // Chame updateUsers apenas uma vez no início
        updateUsers();

        // Clean up the interval when the component unmounts
        return () => {
            // Não é mais necessário clearInterval
        };
    }, []);

    return (
        <div className="card_wrapper_process">
            <h1>Novo Projeto</h1>

            <div className='input_line'>
                <div className="input_wrapper">
                    <label htmlFor="input_nome">Nome do Projeto</label>
                    <input id="input_nome" onChange={(e) => setProjectName(e.target.value)}></input>
                </div>

                <div className='date_input'>

                    <div className="input_wrapper">
                        <label htmlFor="data_fim">Prazo</label>
                        <input type="date" id="data_fim" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                    </div>

                </div>
            </div>

            <div className='lower_card_container'>

                <div className='description_wrapper'>

                    <label htmlFor="contributors">Contribuidores</label>
                    <UsersSelect selectedOptions={contributors} setSelectedOptions={setContributors} options={contributorsArray} placeholder={"Escolha os contribuidores"} />
                    <br></br>
                    <label htmlFor='techleads'>Tech-Leads</label>
                    <UsersSelect selectedOptions={techleads} setSelectedOptions={setTechleads} options={TechleadArray} placeholder={"Escolha os tech-leads"} />
                    <br></br>
                    <div className="input_wrapper">
                        <label htmlFor="contribuidores">Descrição</label>
                        <input id="Descrição" onChange={(e) => setDescription(e.target.value)} ></input>
                    </div>
                </div>
                <div className='concluir'>
                    <button className='cancel' onClick={close_modal_function}>Cancelar</button>
                    <button className='submit' onClick={handleSubmit}>Concluir</button>
                </div>
            </div>
        </div>
    )

}

const UsersSelect = (props) => {

    const selectedOptions = props.selectedOptions
    const setSelectedOptions = props.setSelectedOptions
    const options = props.options

    const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    return (
        <div>
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