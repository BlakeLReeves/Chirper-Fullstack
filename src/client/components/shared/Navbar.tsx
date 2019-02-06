import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="nav bg-dark">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/new" className="nav-link">Post Chirp</Link>
        </nav>
    );
}

export default Navbar;