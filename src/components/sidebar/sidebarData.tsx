import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom';
import './sidebar-style.scss';

export const sidebarData = [
    {
        title: 'Pagina Inicial',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Processos',
        path: '/processos',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Tarefas',
        path: '/tarefas',
        icon: <FaIcons.FaPaperclip/>,
        cName: 'nav-text'
    },
    {
        title: 'Cadastro',
        path: '/cadastro',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]