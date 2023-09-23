import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const background = isDarkTheme ? 'home-container' : 'home-light-container'
  const heading = isDarkTheme && 'light-heading '

  return (
    <>
      <Navbar />
      <div className={background}>
        {isDarkTheme ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="about"
            style={{width: '100px', height: '100px'}}
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="about"
            style={{width: '100px', height: '100px'}}
          />
        )}
        <h3 className={heading}>About</h3>
      </div>
    </>
  )
}
export default About
