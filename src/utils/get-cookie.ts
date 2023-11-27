export default function getCookie(name: string) {
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