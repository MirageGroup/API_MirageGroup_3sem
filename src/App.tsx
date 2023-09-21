import './app.scss'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Login } from './components/Login/login'
import { Screen } from './components/Login_screen/screen'
import { Process_card } from './components/Process_Card/process_card'
import { Recovery_screen } from './components/Recovery_screen/screen'
import { ProjectScreen } from './components/Projects_screen/projects_screen'
import { Background } from './components/Project_background/background'
import { Sidebar } from './components/sidebar/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/screen' Component={Screen}/>
      </Routes>
    </Router>
  )
}

export default App
