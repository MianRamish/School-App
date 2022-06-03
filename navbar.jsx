import React, { useState } from "react";
import logo from '../Components/images/logo.jpg';
import profile from '../Components/images/profile.jfif';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          
        </div>
        <div className="detail">
        <img src={logo} height={70} width={120} className="logo" />
        <h4 className="cname">Wisom School (Great Place To Learn) /<h3 className="oname">Your Name Here</h3></h4>
        <img src={profile} className="profilep" height={70} width={70} />
        <div class="dropdown">
        <button class="dropbtn"><i class="fa-solid fa-angle-down"></i></button>
        <div class="dropdown-content">
        <a href="#">Your profile</a>
        <a href="#">Sign Out</a>
        </div>
      </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;