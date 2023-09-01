import React from 'react'
import './screen.scss'
import ImagemLogin from '../../assets/logo.png';
import { Login } from '../Login/login';
import { Recovery_screen } from '../Recover_screen/screen';

export function Screen(){
    return(
        <div className="screen">
            <img className='screen_img' src={ImagemLogin} alt="login_img" />
            {/* <Login></Login> */}
            <Login></Login>
        </div>

        
    )
}