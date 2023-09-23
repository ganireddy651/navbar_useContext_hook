import {Routes, Route} from 'react-router-dom'

import {useState} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  console.log(isDarkTheme)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
