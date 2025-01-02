import React, { useState } from 'react'
import Home from './pages/home'
import { Outlet } from 'react-router-dom'
import DarkLightTheme from './components/dark-light-comp/dark-light'

const App = () => {

  const [theme, setTheme] = useState(false)

  return (
    <div className={`container ${theme ? "dark" : ""}`}>
      <DarkLightTheme theme={theme} setTheme={setTheme} />
      <Outlet />
    </div>
  )
}

export default App