import './Header.scss'

import logo from '../../assets/desktop/logo.svg'

function Header() {
  // return (
  //   <header className='header'>
  //     <div className='logo'>
  //       <img src={logo} alt='creative agency logo' />
  //     </div>
  //     <nav className='navbar'>
  //       <ul className='navbar__links'>
  //         <li className='commissioner--regular-xs-white'>About</li>
  //         <li className='commissioner--regular-xs-white'>Service</li>
  //         <li className='commissioner--regular-xs-white'>Projects</li>
  //       </ul>
  //       <button className='navbar__button commissioner--extra-bold-xs-white'>
  //         Schedule a Call
  //       </button>
  //     </nav>
  //   </header>
  // )
  return (
    <header className='header'>
      <div className='group-11'>
        <img src={logo} alt='creative agency logo' />
      </div>
      <nav className='rectangle'>
        <ul className='group-12'>
          <li className='commissioner--regular-xs-white'>About</li>
          <li className='commissioner--regular-xs-white'>Service</li>
          <li className='commissioner--regular-xs-white'>Projects</li>
        </ul>
        <div className='group-14'>
          <button className='commissioner--extra-bold-xs-white'>
            Schedule a Call
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
