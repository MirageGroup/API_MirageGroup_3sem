import { Component, useRef, useState } from "react"
import './register_style.scss'
import { useNavigate } from 'react-router-dom'
import ReactInputMask from 'react-input-mask'
import MaskedInput from 'react-text-mask';
import axios from 'axios'


export default function Register() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [role, setRole] = useState('')

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            name: name + ' ' + surname,
            email: email,
            phone: phone,
            cpf: cpf,
            password: password,
            role: Number.parseInt(role)
        }

        try {
            await axios.post("http://localhost:8000/user/create", data).then(() => {
                window.location.href = "/users"
            })
        } catch (error) {

        }
    }

    const navigate = useNavigate()
    const cancel = () => {
        navigate("/users")
    }

    return (
        <div className='register_wrapper'>
            <h1>Cadastrar novo usuário</h1>
            <form>
                <div className="form_wrapper">
                    <div className="input_wrapper">
                        <label htmlFor='name'>Nome</label>
                        <input placeholder='digite o nome' id='name' required onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor='surname'>Sobrenome</label>
                        <input placeholder='digite o sobrenome' id='surname' required onChange={(e) => { setSurname(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className='input_wrapper'>
                        <label htmlFor='email'>Email corporativo</label>
                        <input type='email' placeholder='digite o email' id='email' required onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className='input_wrapper'>
                        <label htmlFor='confirm_email'>Confirmar email</label>
                        <input type='email' placeholder='confirme o email' id='confirm_email' required onChange={(e) => { setConfirmEmail(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className='input_wrapper'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='digite a senha' id='password' required onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>
                    <div className='input_wrapper'>
                        <label htmlFor='confirm_password'>Confirmar senha</label>
                        <input type='password' placeholder='confirme a senha' id='confirm_password' required onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className="input_wrapper">
                        <label htmlFor='phone'>Telefone</label>
                        <PhoneInput setPhone={setPhone} phone={phone} />
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor='cpf'>CPF</label>
                        <CpfInput setCpf={setCpf} cpf={cpf} />
                    </div>
                </div>
                <div className="form_wrapper">
                    <RadioButtons></RadioButtons>
                </div>
                <div className="btn_wrapper">
                    <button className='cancel' onClick={cancel}>Cancelar</button>
                    <button className='register' onClick={handleRegister}>Cadastrar</button>
                </div>
            </form>
        </div>
    )

    function RadioButtons(props) {

        const handleOptionChange = (event) => {
            setRole(event.target.value);
        };

        return (
            <div className='checkbox_wrapper'>
                <label>
                    <input
                        type="radio"
                        value="1"
                        checked={role === "1"}
                        onChange={handleOptionChange}
                    />
                    C-Level
                </label>

                <label>
                    <input
                        type="radio"
                        value="2"
                        checked={role === "2"}
                        onChange={handleOptionChange}
                    />
                    Diretor/Gestor
                </label>

                <label>
                    <input
                        type="radio"
                        value='3'
                        checked={role === '3'}
                        onChange={handleOptionChange}
                    />
                    Tech Lead
                </label>

                <label>
                    <input
                        type="radio"
                        value="4"
                        checked={role === "4"}
                        onChange={handleOptionChange}
                    />
                    Colaborador
                </label>
            </div>
        );
    }


}

function PhoneInput(props) {

    const setPhone = props.setPhone
    const phone = props.phone

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    return (
        <ReactInputMask
            mask="+99 (99) 99999-9999"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="digite o telefone"
            required
        >
        </ReactInputMask>
    );
}

function CpfInput(props) {

    const setCpf = props.setCpf
    const cpf = props.cpf

    const handleCpfChange = (event) => {
        setCpf(event.target.value)
    }

    return (
        <ReactInputMask
            mask={'999.999.999-99'}
            value={cpf}
            onChange={handleCpfChange}
            placeholder='digite o cpf'
            id='cpf'
        >
        </ReactInputMask>
    )
}