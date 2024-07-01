import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src='NGOlogo.jpg' alt='Logo' />
        </div>
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li>
            <a className="nav-link" href="#">About</a>
          </li>
          <li>
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <button className='dbtn'>Donate</button>
      </div>
      <div>
        <h1 className="join">JOIN THE TEAM</h1>
        <button className="joinButton">CLICK HERE TO VIEW CURRENT JOB OPENING AT ASHA WELFARE SOCIETY</button>
      </div>
    </>
  );
}