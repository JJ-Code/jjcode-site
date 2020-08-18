import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setURL } from "../../actions/page";


const Navbar = ({ page: { url }, setURL }) => {
  const checkPage = () => {
    if (url === 'home') {
      return "active"
    } else {
      return ""
    }
  }

  return (
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li className={checkPage()}><Link to='/' onClick={() => setURL('home')}>Home</Link></li>
        <li> <Link to='/about'>About</Link> </li>
        <li> <Link to='/resume'>Resume</Link></li>
        <li> <Link to='/services'>Services</Link></li>
        <li> <Link to='/portfolio'>Portfolio</Link></li>
        <li> <Link to='/contact'>contact</Link></li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  page: state.page
});

export default connect(
  mapStateToProps, {setURL})(Navbar)
