import Register from '../Register/register';
import './register_screen_style.scss'
import Sidebar from "../sidebar/sidebar";

export function RegisterScreen() {
    return (
        <><Sidebar /><div className="screen">
            <Register></Register>
        </div></>
    )
}