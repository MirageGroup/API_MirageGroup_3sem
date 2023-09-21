import './app.scss'

import { Screen } from './components/Login_screen/screen'
import { ProjectScreen } from './components/Projects_screen/projects_screen'
import { Sidebar } from './components/sidebar/sidebar';
import { Home_page } from './components/home_page/home_page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/screen' Component={Screen}/>
        <Route path='/project_screen' Component={ProjectScreen}/>
        <Route path='/' Component={Home_page}/>
        <Route path='/screen' Component={Screen}/>
      </Routes>
    </Router>
  )
}

export default App
