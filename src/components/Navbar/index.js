import {useContext} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)

  const onToggleTheme = () => {
    toggleTheme()
  }
  const navbarBackground = isDarkTheme ? 'navbar' : 'light-navbar'

  const navItem = isDarkTheme ? 'light-nav-items' : 'nav-items'
  return (
    <nav className={navbarBackground}>
      {isDarkTheme ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          alt="website logo"
          style={{height: '35px', width: '35px'}}
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          alt="website logo"
          style={{height: '35px', width: '35px'}}
        />
      )}
      <div className="nav-items-container">
        <ul style={{listStyle: 'none', display: 'flex', alignItems: 'center'}}>
          <li style={{marginRight: '5px'}}>
            <Link to="/" className={navItem}>
              Home
            </Link>
          </li>
          <li style={{marginRight: '5px'}}>
            <Link className={navItem} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        style={{backgroundColor: 'transparent', border: '0'}}
        onClick={onToggleTheme}
        data-testid="theme"
      >
        {isDarkTheme ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            alt="theme"
            style={{height: '35px', width: '35px'}}
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            alt="theme"
            style={{height: '35px', width: '35px'}}
          />
        )}
      </button>
    </nav>
  )
}

export default Navbar
