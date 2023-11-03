import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import './sidebar-style.scss';

export const sidebarData = [
    {
        title: 'Página Inicial',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projetos',
        path: '/project_screen',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'ISOs',
        path: '/iso',
        icon: <IoIcons.IoMdClipboard/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'Tarefas',
    //     path: '/card',
    //     icon: <FaIcons.FaPaperclip/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Usuários',
        path: '/users',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]