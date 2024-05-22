import React from 'react'
import Logo from '../asstes/images/logo/cristal-logo.png'
import '../asstes/css/footer.css'
import { Link } from 'react-router-dom'
import Map from '../asstes/images/icons/email.svg'
const Footer = () => {
  return (
    <div>
    <footer>
        <div className="container">
            <div className="row align-items-center ">
                <div className="col-md-3 text-white">
                    <img src={Logo} alt="Footer Logo"  className='logo'/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, veritatis.</p>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <ul className='footer-menu'>
                    <li className='menu-item d-flex align-items-start'>
                      <img src={Map} alt="Map" className='cont-icon' />
                      <div className="address ms-3">
                      <Link className='d-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, possimus.</Link>
                      </div>
                    </li>
                    <li className='menu-item d-flex align-items-start'>
                      <img src={Map} alt="Map" className='cont-icon' />
                      <div className="address ms-3">
                      <Link className='d-block'>999999999</Link>
                      <Link>9999999999</Link>
                      </div>
                    </li>
                    <li className='menu-item d-flex align-items-start'>
                      <img src={Map} alt="Map" className='cont-icon' />
                      <div className="address ms-3">
                      <Link className='d-block'>crystal.contact@gmail.com</Link>
                      <Link className='d-block'>crystal.contact@gmail.com</Link>
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
