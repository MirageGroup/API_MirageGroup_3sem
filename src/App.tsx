import './app.scss'

import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { ProjectScreen } from './components/Projects_screen/projects_screen'
import { Sidebar } from './components/sidebar/sidebar';
import { Home_page } from './components/home_page/home_page'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { IsoScreen } from './components/iso_screen/iso'
import Kanban_screen from './components/Kanban_screen/kanban_screen'
import React, { useEffect, useState } from 'react';
import useAuth from './middlewares/auth';
import { UserProvider, useUser } from './contexts/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
                <Sidebar />
                <Routes>
                    <Route path="/home" element={protectedRoute(<Home_page />)} />
                    <Route path="/iso" element={<IsoScreen />} />
                    <Route path="/project_screen" element={<ProjectScreen />} />
                    <Route path="/kanban/:id/:name" element={<Kanban_screen />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

const protectedRoute = (children) => {  
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const checkAuthentication = async () => {
            const loggedUser = await useAuth()            
            setIsAuthenticated(loggedUser)
        }

        checkAuthentication()
    }, [])

    if(isAuthenticated === null) {
        return <Navigate to="/login" />
    }else{
        return children
    }

}

export default App
