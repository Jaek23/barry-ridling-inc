'use client';
import Link from 'next/link';
import { FaPaintBrush, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'; 
import { useState } from 'react';
import styles from './navbarStyles/navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                    <FaPaintBrush className={styles.icon}/>
                    <div>
                        <h1 className={styles.logoText}>Barry Ridling Painting</h1>
                        <p className={styles.tagline}>Interior & Exterior Specialist</p>
                    </div>
                </div>
            </Link>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={28}/> : <FaBars size={28}/> }
            </div>

            <div className={styles.navRight}>
                <div className={styles.desktopPhoneItem}>
                    <FaPhoneAlt className={styles.phoneIcon} />
                    <a href="tel:9722388767" className={styles.phoneNumber}>972-238-8767</a>
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    <li className={styles.mobilePhoneItem}>
                        <FaPhoneAlt className={styles.phoneIcon} />
                        <a href="tel:9722388767" className={styles.phoneNumber}>972-238-8767</a>
                    </li>
                    <li onClick={closeMenu}><Link href="/" className={styles.navLink}>Services</Link></li>
                    <li onClick={closeMenu}><Link href="/reviews" className={styles.navLink}>Reviews</Link></li>
                    <li onClick={closeMenu}><Link href="/estimate" className={styles.navLink}>Estimates</Link></li>
                    <li onClick={closeMenu}><a href='#footer' className={styles.navLink}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}