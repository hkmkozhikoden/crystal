import React from 'react'
import Logo from '../asstes/images/logo/cristal-logo.png'
import '../asstes/css/footer.css'
import { Link } from 'react-router-dom'
import Email from '../asstes/images/icons/email.png'
import Phone from '../asstes/images/icons/phone.png'
import Map from '../asstes/images/icons/map.png'
import Insta from '../asstes/images/icons/instagram.png'
import FB from '../asstes/images/icons/facebook.png'
import Yout from '../asstes/images/icons/youtube.png'

const Footer = () => {
  return (
    <div>
    <footer>
        <div className="container">
            <div className="row align-items-center ">
                <div className="col-md-3 text-white col-sm-6">
                    <img src={Logo} alt="Footer Logo"  className='logo'/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, veritatis.</p>
                    <div className="d-flex">
                      <img  className="me-3" src={Insta} alt="Instagram" />
                      <img  className="me-3" src={FB} alt="Facebook" />
                      <img  className="me-3" src={Yout} alt="youtube" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-6">
                  <ul className='footer-menu'>
                    <li className='menu-item'>
                      <Link>noisepin</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Pendant</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Ring</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Bangle</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Bangle</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-2 col-6">
                  <ul className='footer-menu'>
                    <li className='menu-item'>
                      <Link>noisepin</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Pendant</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Ring</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Bangle</Link>
                    </li>
                    <li className='menu-item'>
                      <Link>Bangle</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <ul className='footer-menu ps-0'>
                    <li className='menu-item d-flex align-items-start'>
                      <img src={Map} alt="Map" className='cont-icon' />
                      <div className="address ms-3">
                      <Link className='d-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, possimus.</Link>
                      </div>
                    </li>
                    <li className='menu-item d-flex align-items-start'>
                      <img src={Phone} alt="Map" className='cont-icon' />
                      <div className="address ms-3">
                      <Link className='d-block'>999999999</Link>
                      <Link>9999999999</Link>
                      </div>
                    </li>
                    <li className='menu-item d-flex align-items-start'>
                      <img src={Email} alt="Map" className='cont-icon' />
                      <div className="address ms-3">
                      <Link className='d-block'>contact@gmail.com</Link>
                      <Link className='d-block'>contact@gmail.com</Link>
                      </div>
                    </li>
                  
                  </ul>
                </div>
            </div>
        </div>
    </footer>  
    </div>
  )
}

export default Footer
