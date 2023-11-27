import './app.scss'

import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { ProjectScreen } from './components/Projects_screen/projects_screen'
import { Sidebar } from './components/sidebar/sidebar';
import { Home_page } from './components/home_page/home_page'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { IsoScreen } from './components/iso_screen/iso'
import Kanban_screen from './components/Kanban_screen/kanban_screen'
import React, { Fragment, useEffect, useState } from 'react';
import { UserProvider, useUser } from './contexts/UserContext';
import { RegisterScreen } from './components/RegisterScreen/RegisterScreen';
import UsersScreen from './components/UsersScreen/UsersScreen';

import  ChartScreen  from './components/ChartScreen/ChartScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
    return (
        <UserProvider>

            <AuthProvider>
                <Router>
                    <Fragment>
                        <Routes>
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/" element={<PrivateRoute />} >
                                <Route path="/chart" element={<ChartScreen/>} />
                                <Route path="/home" element={<ProjectScreen />} />
                                <Route path="/iso" element={<IsoScreen />} />
                                <Route path="/kanban/:id/:name" element={<Kanban_screen />} />
                                <Route path="/users" element={<UsersScreen />} />
                                <Route path="/users/register" element={<RegisterScreen />} />
                            </Route>
                        </Routes>
                    </Fragment>
                </Router>
            </AuthProvider>
        </UserProvider>
    );
}

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth()

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default App
