import React from 'react';
import "./Header.css";
import Navbar from "../navbar/Navbar";
import SocialLinks from "../layouts/SocialLinks";
import { Link } from 'react-router-dom';


const Header = ({ props }) => {
  console.log(props);
  return (
    <header id="header" className="header-tops">
      <div className="container">

        <h1>
          <Link to='/home'>Jaymee Liu</Link>
        </h1>
      
        <h2>I'm a passionate <span>graphic designer</span> living SF</h2>

        <Navbar />
        <SocialLinks />

      </div>
    </header>
  )
}

export default Header;
