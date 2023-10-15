import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import './sidebar-style.scss';

export const sidebarData = [
    {
        title: 'Página Inicial',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projetos',
        path: '/project_screen',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'Tarefas',
    //     path: '/card',
    //     icon: <FaIcons.FaPaperclip/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Minha conta',
        path: '/screen',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]