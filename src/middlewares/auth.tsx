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
            return response.data;
        } else {
            throw new Error('Falha na autenticação');
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

function getCookie(name: string) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const [cookieName, cookieValue] = cookie.split('=');

        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
