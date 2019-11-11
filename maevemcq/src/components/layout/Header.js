import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Maeve McQueeny</h1>
            <Link style={linkStyle} to="/">About Me</Link> | <Link style={linkStyle} to="/resume">Resume</Link> | <Link style={linkStyle} to="/technologies">Technologies</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle={
    color: '#fff',
    textDecoration: 'none',
    padding: '4px'
}

export default Header;
