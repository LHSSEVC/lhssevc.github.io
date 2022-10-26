import React from 'react'
import './Navbar.scss'

let pages = ['Home', 'About', 'Contact', 'Team', 'Gallery', 'Sponsors']

const Navbar = () => {
  return (
    <div className='navbar'>
        {
          pages.map((value, index) => {
            if (value == 'Home') {
              return (
                <a href={`/`}>{value}</a>
              )
            }
            return (
              <a href={`/${value.toLowerCase().replace(" ", "")}`}>{value}</a>
            )
          })
        }
    </div>
  )
}

export default Navbar