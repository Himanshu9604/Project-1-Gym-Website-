import React from 'react'
import {NavLink} from 'react-router-dom'
import Styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={Styles.navbar} >
      <ul style={{listStyleType:"none"} }>
      <li >
      <NavLink to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink to='/about'>About</NavLink>
      </li>
      <li>
      <NavLink to='/blogs'>Blogs</NavLink>
      </li>
      <li>
      <NavLink to='/classes'>Classes</NavLink>
      </li>
      <li>
      <NavLink to='/joinus'>JoinUs</NavLink>
      </li>
      <li>
      <NavLink to='/pricing'>Pricing</NavLink>
      </li>
      <li>
        <NavLink to ='/login'> Login</NavLink>
      </li>
      </ul>
    </div>
  )
}

export default Navbar