import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import './footer.css';

export default function Home() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 280) {
          setshowScrollBTN(true)
      } else {
        setshowScrollBTN(false)
      }
    })
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
    return (
      <footer>
        <ul className='flex'>
          <li><a href="">À propos</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <p>© Copyright by Bensliman 2024. Tous droits réservés.</p>

        <a style={{opacity: showScrollBTN? 1 : 0, transition: "1s"}} href='#home'>
          <button className='icon-angle-up scroll2top'/>
        </a>
      </footer>
      
    )
  }