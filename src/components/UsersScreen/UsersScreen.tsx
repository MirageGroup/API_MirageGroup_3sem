import axios from 'axios'
import './users_screen.scss'
import { useEffect, useState } from 'react'

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
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role.name}</td>
                </tr>
            )
        })
    }

    return (
        <div className="screen_wrapper">

            <div className="screen_title">
                <h1>Usuários</h1>
            </div>

            <div className="table-container">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                    </tr>
                    <tbody>{renderTable()}</tbody>
                </table>
            </div>

        </div>
    )

}