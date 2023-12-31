import React from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/images/ki-pilot.png';
import '../styles/Navbar.css'
import '../styles/styles.css'

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#f7f6f1",
    textDecoration: "none",
    borderBottom: '1px solid #eaeaea',
    transition: "background-color 0.3s ease",
  };

  const listStyle = {
    display: 'flex', // Fügt Flex-Layout hinzu
    listStyleType: 'none', // Entfernt Punkte
    padding: 0, // Entfernt Padding
    margin: 0, // Entfernt Margin
  };

  const listItemStyle = {
    marginRight: '1rem', // Fügt rechten Abstand zwischen den Listenelementen hinzu
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
    alignItems: "center",
    maxWidth: '100%',
    paddingBottom: '30px',
    paddingRight: '20px', 
    paddingLeft: '20px',
    paddingTop:'30px',
    margin:'0'
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    position: 'relative',
    paddingTop:'20px',
    fontWeight: '400',
    fontSize: '.625rem',
    letterSpacing: '.01em',
    lineHeight: '1.1',
    textTransform: 'uppercase',
  };

  const linkHoverStyle = {
    textDecoration: "none",
    opacity: '1',
  };

  return (
    <header className="header">
      <nav style={navStyle} className="main-navigation">
        <div style={containerStyle}>
          <img src={logo} alt="Ki pilot logo" />
          <ul style={listStyle}>
            {['Overview', 'Sensors', 'Ai', 'Learning', 'About', 'Model'].map((text, index) => (
              <li key={index} style={listItemStyle}>
                <Link 
                  to={`/${text.toLowerCase()}`} 
                  style={linkStyle}
                  onMouseOver={linkHoverStyle}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Navbar;
