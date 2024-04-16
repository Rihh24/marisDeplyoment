import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} />
        <p>STASH</p>
      </div>
      <ul className="footer-links">
        <li>Products</li>
        <li>Contact</li>
        <li>About</li>
        <li>Locations</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
