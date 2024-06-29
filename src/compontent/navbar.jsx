import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../asstes/css/navbar.css';
import Logo from '../asstes/images/logo/cristal-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('open-menu', !menuOpen);
    document.documentElement.classList.toggle('overflow-y-hidden-zero-md', !menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
    document.body.classList.remove('open-menu');
    document.documentElement.classList.remove('overflow-y-hidden-zero-md');
  };

  return (
    <div className='Navbar'>
     <div className="header-top bg-orange py-2">
      <div className="container">
        <ul className="menu-1">
        <li className='menu-list'>
               <Link className='menu-link text-white' to='/'>Home</Link>
             </li>
             <li className='menu-list'>
               <Link className='menu-link text-white' to='/diamond'>Diamond</Link>
             </li>
        </ul>
      </div>
     </div>
      <div className="container">
        <div className="row align-items-center bg-white">
          <div className="col-4 col-lg-2">
            <img className='header-logo' src={Logo} alt="Logo"  />
          </div>
          <div className="col-lg-10 col-8">
            <div className="menu-outside menu_toggle position-relative">
              <button className="menu-toggle menu_toggle" onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="position-relative">
            <nav className={`menu-bar justify-content-end ${menuOpen ? 'open' : ''}`}>
           
           <ul className='menu justify-content-end'>
           <button className="close-menu" onClick={handleClose}>
           </button>
             <li className='menu-list'>
               <Link className='menu-link' to='/'>Home</Link>
             </li>
             <li className='menu-list'>
               <Link className='menu-link' to='/diamond'>Diamond</Link>
             </li>
             <li className='menu-list'>
               <Link className='menu-link' to='/gold'>Gold</Link>
             </li>
             <li className='menu-list'>
               <Link className='menu-link' to='/ring'>Ring</Link>
             </li>
             <li className='menu-list'>
               <Link className='menu-link' to='/gift'>Gift</Link>
             </li>
             <li className='menu-list'>
               <Link className='menu-link' to='/contact'>Contact</Link>
             </li>
           </ul>
         </nav>
            </div>
            <div className="dropdown-menu">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
