import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const background = isDarkTheme ? 'home-container' : 'home-light-container'
  const heading = isDarkTheme && 'light-heading '
  return (
    <>
      <Navbar />
      <div className={background}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
          alt="not found"
          style={{width: '100px', height: '100px'}}
        />
        <h3 className={heading}>Lost Your Way?</h3>
        <p className={heading}>
          We cannot seem to find the page you are looking for.
        </p>
      </div>
    </>
  )
}
export default NotFound
