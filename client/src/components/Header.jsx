import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className=' flex' id='home'>
      <button onClick={() => {setshowModal(true)}} className='menu icon-menu'></button>
      <Link to='/'>
        <img src="src/assets/img/logo1.png" alt="logo" className='logo' />
      </Link>
      
      
      <nav>
        <ul className='flex'>
          <li><a href="#header">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* <Link to='/sign-up'>
        <button className='button'>Connexion</button>
      </Link> */}
      <div className='divnone'></div>

      {showModal &&(
      <div className='fixed' id='home'>
          <ul className='modal'>
            <li>
              <button onClick={() => {setshowModal(false)}} className='icon-close'/>
            </li>
            <li>
              <a href="">À propos</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
      </div>)}

    </header>
    
  )
}
