import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom';
import './sidebar-style.scss';

export const sidebarData = [
    {
        title: 'Página Inicial',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Processos',
        path: '/processcard',
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
        path: '/screen',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]