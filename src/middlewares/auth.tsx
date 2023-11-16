import axios from 'axios';

export default async function useAuth() {
    const token = getCookie('access_token');
    if (!token) {
        return null
    }

    try {
        const response = await axios.get('http://localhost:8000/user/getprofile', {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            axios.defaults.withCredentials = true
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            return response.data;
        } else {
            throw new Error('Falha na autenticação');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}
