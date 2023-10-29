import './app.scss'

import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { ProjectScreen } from './components/Projects_screen/projects_screen'
import { Sidebar } from './components/sidebar/sidebar';
import { Home_page } from './components/home_page/home_page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IsoScreen } from './components/iso_screen/iso'
import Kanban_screen from './components/Kanban_screen/kanban_screen'



function App() {

  return (
    <Router>
      <Sidebar></Sidebar>
        <Routes>
          <Route path='/' Component={LoginScreen}/>
          <Route path='/home' Component={Home_page}/>
          <Route path='/iso' Component={IsoScreen}/>
          <Route path='/project_screen' Component={ProjectScreen}/>
          <Route path='/kanban/:id/:name' Component={Kanban_screen}/>
          
        </Routes>
    </Router> 

    // <New_task></New_task>


    // <Background></Background>

    // <Card></Card>
  )
}

export default App
