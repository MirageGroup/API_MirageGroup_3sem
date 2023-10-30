import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { sidebarData } from './sidebarData';
import './sidebar-style.scss';
import { IconContext } from 'react-icons';
import * as IoIcons from "react-icons/io";
import  logoionic from '../../img/logoionic.png'

export function Sidebar() {
    const [navbar, setnavbar] = useState(false)

    const showNavbar = () => setnavbar(!navbar)

    const checkUserLogin = async () => {
        
    }
  
    return(
    <>
    <IconContext.Provider value={{color: '#53C4CD'}}>
        <div className='navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showNavbar}/>
        </Link>
        <img src={logoionic}/>
        <Link className="icone_cadastro" to="/screen">
            <IoIcons.IoMdPeople />
        </Link>
        </div>
        <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-itens' onClick={showNavbar}>
            <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose/>
            </Link>
            </li>
            {sidebarData.map((item, index) => {
            return (
                <li key={index} className={item.cName}>
                <Link to={item.path}>

                {item.icon}
                <span>{item.title}</span>
                </Link>
                
                </li>
            )
            }
            )}
        </ul>
        </nav>
    </IconContext.Provider>
    </>
    )
}

export default Sidebar;