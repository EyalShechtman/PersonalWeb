import React from 'react';
import '../styles.css';

// Define styles using CSSProperties from React
const styles: React.CSSProperties = {
  position: 'relative',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '60%',
  zIndex: 1000,
  padding: '10px 0',
};

const Navbar: React.FC = () => {
  return (
    <nav style={styles}>
      <ul style={listStyles}>
        <li style={navItemStyles}>
          <a className='nav' href="#about" style={navLinkStyles}>ABOUT</a>
        </li>
        <li style={navItemStyles}>
          <a className='nav' href="#projects" style={navLinkStyles}>PROJECTS</a>
        </li>
        <li style={navItemStyles}>
          <a className='nav' href="#interest" style={navLinkStyles}>INTERESTS</a>
        </li>
        <li style={navItemStyles}>
          <a className='nav' href="#contact" style={navLinkStyles}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

// Separate styles for other elements
const listStyles: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
  gap: '1px'
};

const navItemStyles: React.CSSProperties = {};

const navLinkStyles: React.CSSProperties = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'normal'
};

export default Navbar;