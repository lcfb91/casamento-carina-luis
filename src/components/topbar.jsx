// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import {
  navLink,
  navMenu,
  grid,
  gridElement,
  navLogo
} from './topbar.module.css'

import logo from '../images/logo.png'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Topbar = () => {
  return (
    <nav className={navMenu}>
      <div className={grid}>
          <a className={navLink} href="#data">Data</a>
          <a className={navLink} href="#cerimonia">Cerimónia</a>
          <div className={navLink}>
          <img src={logo} alt="logo" className={ navLogo} />
          </div>
          <a className={navLink} href="#convivio">Convívio</a>
          <a className={navLink} href="#contactos">Contactos</a>
      </div>      
    </nav>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Topbar