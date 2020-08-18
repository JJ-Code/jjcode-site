import React, { useEffect, Fragment } from 'react';
import "./HeaderTop.css";
import Navbar from "../navbar/Navbar";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SocialLinks from "../layouts/SocialLinks";
import { setURL } from "../../actions/page";


const HeaderTop = ({ match, page: { url }, setURL }) => {

  console.log(url)
  console.log("i ran");

  const checkPage = () => {
    if (url === 'home') {
      return "header-tops"
    } else {
      return "header-tops header-top"
    }
  }

  return (

    <Fragment>


      <header id="header" className={checkPage()}>
        <div className="container">

          <h1>
            <Link to='/' onClick={() => setURL('home')}>Jaymee Liu</Link>
          </h1>
          <Navbar />
          <SocialLinks />

        </div>
      </header>

    </Fragment >
  )
}

const mapStateToProps = state => ({
  page: state.page
});

export default connect(
  mapStateToProps,
  { setURL })(HeaderTop);
