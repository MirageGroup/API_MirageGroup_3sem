import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { sidebarData } from './sidebarData';
import './sidebar-style.scss';

export function Sidebar() {
  const [navbar, setnavbar] = useState(false)

  const showNavbar = () => setnavbar(!navbar)
  return(
    <>
  <div className='navbar'>
    <Link to="#" className='menu-bars'>
      <FaIcons.FaBars onClick={showNavbar}/>
    </Link>
  </div>
  <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
    <ul className='nav-menu-itens'>
      <li className="navbar-toggle">
        <Link to="#" className='menu-bars'>
          <AiIcons.AiOutlineClose/>
        </Link>
      </li>
      {sidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}></Link>
            {item.icon}
            <span>{item.title}</span>
          </li>
        )
      }
      )}
    </ul>
  </nav>
  </>
  )
}

export default Sidebar;