import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar border-bottom border-info" style={{backgroundColor: '#1b1b2f'}} >
            <div className="container-fluid">
                <a className="navbar-brand text-info" href="/">天気 App (Weather App)</a>
            </div>
        </nav>
    )
}

export default Navbar