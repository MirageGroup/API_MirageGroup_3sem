import React from 'react'
import './screen.scss'
import ImagemLogin from '../../assets/logo.png';
import { Login } from '../Login/login';
import { Recovery_screen } from '../Recovery_screen/screen';
import ImagemLogin from '../../assets/login-screen-image.svg';
import { Login } from '../Login/login';

export function Screen(){
    return(
        <div className="screen">
            <img className='screen_img' src={ImagemLogin} alt="login_img" />
            <Login></Login>
        </div>

        
    )
}