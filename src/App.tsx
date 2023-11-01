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
                    <Route path="/login" element={<LoginCheck> <LoginScreen /> </LoginCheck>} />
                </Routes>
                <Sidebar />
                <Routes>
                    <Route path="/home" element={<ProtectedRoute><Home_page/></ProtectedRoute>} />
                    <Route path="/iso" element={<ProtectedRoute><IsoScreen/></ProtectedRoute>} />
                    <Route path="/project_screen" element={<ProtectedRoute><ProjectScreen /></ProtectedRoute>} />
                    <Route path="/kanban/:id/:name" element={<ProtectedRoute><Kanban_screen /></ProtectedRoute>} />
                </Routes>
                <Routes>
                </Routes>
            </Router>
        </UserProvider>
    );
}

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { user, setUser } = useUser();

    useEffect(() => {
        const CheckAuthentication = async () => {
            const loggedUser = await useAuth();
            setIsAuthenticated(loggedUser);
        }

        CheckAuthentication()
    }, [])

    if (isAuthenticated === null) {
        return <Navigate to="/login" />
    } else {
        setUser(isAuthenticated);
        return children;
    }
}

const InvalidRoute = ({ }) => {
    return <Navigate to="/home" />
}

const LoginCheck = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { user, setUser } = useUser();
    
    useEffect(() => {
        const CheckAuthentication = async () => {
            const loggedUser = await useAuth();
            setIsAuthenticated(loggedUser);
        }

        CheckAuthentication()
    }, [])

    if(isAuthenticated){
        return <Navigate to="/home" />
    }else{
        return children
    }
}

export default App
