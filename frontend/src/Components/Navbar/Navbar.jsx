import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from "../Assets/dropdown_icon.png"

const Navbar = () => {
    const [menu, setMenu] = useState("all");
    const [isMenuVisible, setIsMenuVisible] = useState(false); // Add state for menu visibility
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
    }

    const handleMenuItemClick = () => {
        setIsMenuVisible(false); // Hide menu when a menu item is clicked
    }

    return (
    <div className='nav-bar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>Mari's</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="dropdown" />
        <ul className={`nav-menu ${isMenuVisible ? 'nav-menu-visible' : ''}`} ref={menuRef}>
            <li onClick={() =>{setMenu("all"); handleMenuItemClick()}}><Link to='/'>All</Link>{menu==="all"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("flower"); handleMenuItemClick()}}><Link to='/flower'>Flower</Link>{menu==="flower"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("cartridges"); handleMenuItemClick()}}><Link to='/cartridges'>Cartridges</Link>{menu==="cartridges"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("edibles"); handleMenuItemClick()}}><Link to='/edibles'>Edibles</Link>{menu==="edibles"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("disposables"); handleMenuItemClick()}}><Link to='/disposables' >Disposables</Link>{menu==="disposables"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("concentrates"); handleMenuItemClick()}}><Link to='/concentrates'>Concentrates</Link>{menu==="concentrates"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("prerolls"); handleMenuItemClick()}}><Link to='/prerolls'>Pre-Rolls</Link>{menu==="prerolls"?<hr/>:<></>}</li>

        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar
