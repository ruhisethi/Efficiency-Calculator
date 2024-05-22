import React from 'react'
import "../Landing.css";
import navlogo from "../assets/img/logonav1.png"
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
    <header>

<div className="container">

  <a href="#" className="logo">
    <img src={navlogo} alt="Funel logo" />
  </a>

  <div className="navbar-wrapper">

    <button className="navbar-menu-btn" data-navbar-toggle-btn>
      <ion-icon name="menu-outline"></ion-icon>
    </button>

    <nav className="navbar" data-navbar>

      <ul className="navbar-list">

        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          <a href='/#about' className="nav-link">What we do</a>
        </li>

        <li className="nav-item">
          <a href="/#features" className="nav-link">Why us?</a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">Our work</a>
        </li>

        <li className="nav-item">
          <a href="/#contact" className="nav-link">Contact</a>
        </li>

      </ul>
<a href="/#contact">

      <button className="btn btn-primary">Get in touch</button>
</a>

    </nav>

  </div>

</div>

</header>
      
    </>
  )
}

export default Header
