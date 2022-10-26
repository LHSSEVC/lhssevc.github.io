import React, {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import './Navbar.scss'

let pages = [{name: 'Home', path: "/"}, 'About', 'Contact', 'Team', 'Gallery', 'Sponsors']

const Navbar = () => {
  const [hamburgerState, changeHamburgerState] = useState(false)

  return (
    <div className='navbar'>
      <div className="desktop links">
        {
          pages.map((value, index) => {
            if (typeof value === "object") {
              return (
                <a href={`/`}>{value.name}</a>
              )
            }
            return (
              <a href={`/${value.toLowerCase().replace(" ", "")}`}>{value}</a>
            )
          })
        }
      </div>

      <div className = "mobile hamburgerButton">
        <button onClick={() => {changeHamburgerState(!hamburgerState)}}>
          <AiOutlineMenu/>
        </button>
      </div>

      <div className = {"mobile links " + (hamburgerState ? "hidden" : "")}>

      </div>
    </div>
  )
}

export default Navbar