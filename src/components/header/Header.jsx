import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
const Header=()=>{
    return(
        <div className='logo'>
            <div className='logo'>
                <img src={Logo} alt="" />
                <span>amazon</span>
            </div>


            <div className="header-r">
                <div className="header-menu">
                    <ul className='header-menu'>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>new</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>

                </div>

                <input type="text" className="search" placeholder='Search' />

                <CgShoppingBag className='cart'></CgShoppingBag>

            </div>
            
        </div>
    )
}

export default Header