'use client';
import Link from 'next/link';
import { FaPaintBrush } from 'react-icons/fa'; 

export default function Navbar() {
    return (
        <nav style={navStyles}>
            <Link href="/" style={logoLinkStyles}>
                <div style={logoContainerStyles}>
                    <FaPaintBrush style={iconStyles}/>
                    <h1 style={logoStyles}>Barry Ridling Painting</h1>
                </div>
            </Link>
            <ul style={navListStyles}>
                <li><Link href="/" style={navLinkStyles}>Services</Link></li>
                <li><Link href="/reviews" style={navLinkStyles}>Reviews</Link></li>
                <li><Link href="/estimate" style={navLinkStyles}>Request Estimates</Link></li>
            </ul>
        </nav>
    );
}

// Styles
const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2.4rem 2rem', // Increased height
    backgroundColor: '#002B5B',
    color: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
};

const iconStyles = {
    fontSize: '2rem',
    color: '#FFD700',
};

const logoStyles = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: 0,
};

const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
};

const navLinkStyles = {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    fontWeight: 'bold',
};

const logoLinkStyles = {
    textDecoration: 'none',
    color: 'inherit',
};