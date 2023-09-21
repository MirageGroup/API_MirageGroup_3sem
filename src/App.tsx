import './app.scss'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Login } from './components/Login/login'
import { Screen } from './components/Login_screen/screen'
import { Process_card } from './components/Process_Card/process_card'
import { Recovery_screen } from './components/Recovery_screen/screen'
import { Background } from './components/Project_background/background'
import { Column } from './components/Column/column'
import { Card } from './components/Card/card'


function App() {

  return (
  <>
    {/* <Screen></Screen>  */}
    {/* <Background nome="Projeto #1"></Background> */}
    <Column></Column>
    
  </>
  
    
  )
}

export default App
