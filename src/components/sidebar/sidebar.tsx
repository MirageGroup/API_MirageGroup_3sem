import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { sidebarData } from './sidebarData';
import './sidebar-style.scss';
import { IconContext } from 'react-icons';
import * as IoIcons from "react-icons/io";
import logoionic from '../../img/logoionic.png'
import { useUser } from '../../contexts/UserContext';

export function Sidebar() {
    const [navbar, setnavbar] = useState(false)

    const { user } = useUser()

    const showNavbar = () => setnavbar(!navbar)

    const filteredSidebarData = sidebarData.filter(item =>
        item.allowedUserTypes.includes(user.role.id)
    );

    return (
        <>
            <IconContext.Provider value={{ color: '#53C4CD' }}>
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showNavbar} />
                    </Link>
                    <img src={logoionic} />
                    <span className="exit-btn" onClick={deleteAllCookies}><IoIcons.IoMdExit /></span>
                </div>
                <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-itens' onClick={showNavbar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {filteredSidebarData.map((item, index) => {
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

function deleteAllCookies() {
    console.log('apagando cookie');
    
    const c = document.cookie.split("; ");
    for (const i in c) {
        document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";    
    } 
    window.location.href = "/login"
}

export default Sidebar;