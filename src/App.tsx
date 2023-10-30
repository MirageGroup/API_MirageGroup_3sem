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
                    <Route path="/home" element={<ProtectedRoute><Home_page/></ProtectedRoute>} />
                    <Route path="/iso" element={<ProtectedRoute><IsoScreen/></ProtectedRoute>} />
                    <Route path="/project_screen" element={<ProtectedRoute><ProjectScreen /></ProtectedRoute>} />
                    <Route path="/kanban/:id/:name" element={<ProtectedRoute><Kanban_screen /></ProtectedRoute>} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { user, setUser } = useUser(); // Use useUser dentro de um componente funcional

    useEffect(() => {
        const checkAuthentication = async () => {
            const loggedUser = await useAuth(); // Certifique-se de que useAuth seja importado corretamente
            setIsAuthenticated(loggedUser);
        }

        checkAuthentication()
    }, [])

    if (isAuthenticated === null) {
        return <Navigate to="/login" />
    } else {
        setUser(isAuthenticated);
        return children;
    }
}

export default App
