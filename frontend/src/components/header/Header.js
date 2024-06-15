import React from 'react';
import './Header.css'
export default function Header() {
    return (
          <div className='navbar'>
              <div className='logo'>
                <img src='NGOlogo.jpg' alt='Logo'/>
              </div>
              <ul class="nav-links">
                <li>
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li>
                  <a class="nav-link" href="#">About</a>
                </li>
                <li>
                  <a class="nav-link" href="#">Contact</a>
                </li>  
              </ul>
              <button className='dbtn'>Donate</button>
          </div>
    )
  }