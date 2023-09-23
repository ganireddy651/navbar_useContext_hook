import {useContext} from 'react'

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const background = isDarkTheme ? 'home-container' : 'home-light-container'
  const heading = isDarkTheme && 'light-heading '
  return (
    <>
      <Navbar />
      <div className={background}>
        {isDarkTheme ? (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              style={{width: '100px', height: '100px'}}
            />
            <h3 className={heading}>Home</h3>
          </>
        ) : (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              style={{width: '100px', height: '100px'}}
            />
            <h3>Home</h3>
          </>
        )}
      </div>
    </>
  )
}
export default Home
