import React from 'react';
import {CgProfile} from 'react-icons/cg';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
        <header>
            <nav>
                <div className="logo">
                    <h3>OPOBO <span>HERITAGE FESTIVAL</span></h3>
                </div>

                <ul>
                    <li><a href="">Sign Up</a></li>
                    <CgProfile className='prof'/>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
