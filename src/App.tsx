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
import { RegisterScreen } from './components/RegisterScreen/RegisterScreen';
import UsersScreen from './components/UsersScreen/UsersScreen';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginScreen /> } />
                </Routes>
                <Routes>
                    <Route path="/home" element={<ProjectScreen/>} />
                    <Route path="/iso" element={<IsoScreen/>} />
                    <Route path="/kanban/:id/:name" element={<Kanban_screen />} />
                    <Route path="/users" element={<UsersScreen />} />
                    <Route path="/users/register" element={<RegisterScreen />} />
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
            if(!user){
                const loggedUser = await useAuth();
                setUser(loggedUser);
            }
        }

        CheckAuthentication()
    }, [])

    return user ? children : <Navigate to="/login" />
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
