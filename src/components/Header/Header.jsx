import { useState } from 'react'

import logo from '../../assets/desktop/logo.svg'
import icon_cross from '../../assets/mobile/icon-cross.svg'
import icon_hamburger from '../../assets/mobile/icon-hamburger.svg'

import './Header.scss'

function Header() {
  //toggle menu image for small screens
  const [toggleMenu, setToggleMenu] = useState(false)
  const [mobileMenu, setMobilMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
    setMobilMenu(!mobileMenu)
  }

  return (
    <header className='header'>
      <div className='header__block'>
        <img src={logo} alt='creative agency logo' />
        <div
          className='icon_hamburger'
          onClick={handleToggleMenu}
          style={{
            backgroundImage: `url(${toggleMenu ? icon_cross : icon_hamburger})`,
          }}
        />
      </div>
      <div className='header__rectangle'></div>
      <ul className='navbar'>
        <li className='commissioner--regular-xs-white'>About</li>
        <li className='commissioner--regular-xs-white'>Service</li>
        <li className='commissioner--regular-xs-white'>Projects</li>
      </ul>
      <div className='header__button'>
        <button className='commissioner--extra-bold-xs-white'>
          Schedule a Call
        </button>
      </div>
      {mobileMenu ? (
        <div className='navbar--mobile'>
          <ul className='navbar--mobile-list'>
            <li className='navbar--mobile-li'>About</li>
            <li className='navbar--mobile-li'>Service</li>
            <li className='navbar--mobile-li'>Projects</li>
          </ul>
          <div className='navbar--mobile-button'>
            <button className='commissioner--extra-bold-xs-white'>
              Schedule a Call
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </header>
  )
}

export default Header
