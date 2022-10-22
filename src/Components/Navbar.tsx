import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/team'>Team</a>
        <a href='/gallery'>Gallery</a>
        <a href='/sponsorinfo'>Sponsor Information</a>
    </div>
  )
}

export default Navbar