import axios from 'axios'
import './users_screen.scss'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Sidebar from "../sidebar/sidebar";

export default function UsersScreen() {

    const [data, setData] = useState([])

    
    useEffect(() => {
        axios.get("http://localhost:8000/user/fetchall").then((response) => {
            setData(response.data)
        })
    }, [])
    
    const renderTable = () => {
        return data.map(user => {
            return (
                <tr className='users_rows'>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role.name}</td>
                </tr>
            )
        })
    }
    
    const navigate = useNavigate()
    const registerUser = () => {
        navigate("/users/register")
    }

    return (

        <><Sidebar /><div className="screen_wrapper">

            <div className="screen_title">
                <h1>Usuários</h1>
            </div>

            <div className="table_container">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Cargo</th>
                    </tr>
                    <tbody>{renderTable()}</tbody>
                </table>
            </div>
            <button className='register-btn' onClick={registerUser}>Criar novo usuário</button>

        </div></>
    )

}