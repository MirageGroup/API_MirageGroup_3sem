import React from 'react'
import './screen.scss'
import ImagemLogin from '../../assets/logo.png';
import { Login } from '../Login/login';
import { Recovery_screen } from '../Recovery_screen/screen';

export function Screen(){
    return(
        <div className="screen">
            <Login></Login>
        </div>

        
    )
}