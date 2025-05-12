'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={navStyles}>
            <Link href="/" style={logoLinkStyles}>
                <h1 style={logoStyles}>Barry Ridling Painting</h1>
            </Link>
            <ul style={navListStyles}>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/estimate">Request Estimates</Link></li>
            </ul>
        </nav>
    );
}

const navStyles = {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'1rem 2rem',
    backgroundColor:'#f2f2f2'
};

const logoStyles = {
    fontSize:'1.5rem',
    fontWeight:'bold'
};

const navListStyles = {
    display: 'flex',
    listStyle:'none',
    gap:'1rem'
};

const logoLinkStyles = {
    textDecoration: 'none',
    color: 'inherit', 
};