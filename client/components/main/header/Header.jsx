import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import COLORS from '../../../styles/COLORS';
import clx from 'classnames';

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const cta2Style = {
    color: COLORS.BRAND.CTA2,
  };

  const backgroundStyle = {
    color: COLORS.BACKGROUND,
  };

  const cta1Style = {
    color: COLORS.BRAND.CTA1,
  };

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="navbar-item">
            <p style={cta1Style}>311</p>
            <p style={cta2Style}>DATA</p>
          </div>
          <div className="navbar-item beta-tag-wrapper">
            <span className="beta-tag">BETA</span>
          </div>
        </Link>
        <a role="button" className={clx('navbar-burger', { 'is-active': activeBurger })} aria-label="menu" aria-expanded="false" onClick={() => setActiveBurger(!activeBurger)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className={clx('navbar-menu', { 'is-active': activeBurger })}>
        <div className="navbar-start">
          <div className="navbar-item">
            <NavLink exact to="/data" activeClassName="navbar-selected" style={backgroundStyle}>
              Explore My Council&apos;s 311 Data
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink exact to="/comparison" activeClassName="navbar-selected" style={backgroundStyle}>
              Compare Different Councils
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <NavLink exact to="/about" activeClassName="navbar-selected" style={backgroundStyle}>
              About 311 Data
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink exact to="/contact" activeClassName="navbar-selected" style={backgroundStyle}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
