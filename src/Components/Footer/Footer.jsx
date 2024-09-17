import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p> Lorem Ipsum is a simply dummy text of the printing</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2> COMPANY</h2>
                    <ul>

                        <li>Home</li>
                        <li>About-Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li> 0773748417</li>
                    <li> contact@tomato.com</li>
                    
                </ul>

            </div>
        </div>
    
      <center> <p className="footer-copyright">Copyright 2024  Tomato.com All Right Reserved.</p>
      </center>  
    </div>
  )
}

export default Footer