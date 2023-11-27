import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import './sidebar-style.scss';

export const sidebarData = [
    {
        title: 'Processos',
        path: '/home',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text',
        allowedUserTypes: [1, 2, 3, 4]
    },
    {
        title: 'ISOs',
        path: '/iso',
        icon: <IoIcons.IoMdClipboard/>,
        cName: 'nav-text',
        allowedUserTypes: [1, 2]
    },
    {
        title: 'Graficos',
        path: '/chart',
        icon: <IoIcons.IoMdClipboard/>,
        cName: 'nav-text',
        allowedUserTypes: [1, 2,3,4]
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
        cName: 'nav-text',
        allowedUserTypes: [2, 3]
    }
]