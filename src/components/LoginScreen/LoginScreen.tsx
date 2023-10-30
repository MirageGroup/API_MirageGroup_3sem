import React from 'react'
import './login_screen_style.scss'
import ImagemLogin from '../../assets/logo.png';
import { Login } from '../Login/login';
import { Recovery_screen } from '../Recovery_screen/screen';

export function LoginScreen(){
    return(
        <div className="screen">
            <Login></Login>
        </div>
    )
}