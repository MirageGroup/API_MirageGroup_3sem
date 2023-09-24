import './app.scss'

import { Screen } from './components/Login_screen/screen'

import { Process_card } from './components/Process_Card/process_card'
import { Recovery_screen } from './components/Recovery_screen/screen'
import { Background } from './components/Project_background/background'
import { Column } from './components/Column/column'
import { Card } from './components/Card/card'
import { ProjectScreen } from './components/Projects_screen/projects_screen'
import { Sidebar } from './components/sidebar/sidebar';
import { Home_page } from './components/home_page/home_page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { New_task } from './components/New_task/New_task'

function App() {

  return (
    // <Router>
    //   <Sidebar></Sidebar>
    //   <Routes>
    //     <Route path='/screen' Component={Screen}/>
    //     <Route path='/project_screen' Component={ProjectScreen}/>
    //     <Route path='/' Component={Home_page}/>
    //     <Route path='/screen' Component={Screen}/>
    //   </Routes>
    // </Router> 
    <New_task></New_task>
  )
}

export default App
