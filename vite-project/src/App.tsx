import './app.scss'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/header'

function App() {

  const [mode, setMode] = useState(false)

  const themeClass = mode ? 'dark' : 'light';

  return (
    <div className={`main_wrapper ${themeClass}`}>
        <Header theme = {themeClass} change_mode = {() => setMode(!mode)}></Header>
    </div>

  )
}

export default App
