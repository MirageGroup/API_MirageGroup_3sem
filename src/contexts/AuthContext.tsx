import { createContext, useContext, useState } from 'react';
import getCookie from '../utils/get-cookie';
import axios from 'axios';
import { useUser } from './UserContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { setUser } = useUser()

    const auth = async () => {
        const token = getCookie('access_token');
        if (!token) {
            setIsAuthenticated(false);
        }

        try {
            const response = await axios.get('http://localhost:8000/user/getprofile', {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const logout = () => {
        const c = document.cookie.split("; ");
        for (const i in c) {
            document.cookie = /^[^=]+/.exec(c[i])[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        
        setUser(null)
        setIsAuthenticated(false);

        authenticate()
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, auth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};