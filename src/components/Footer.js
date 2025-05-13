'use client';
import styles from './footerStyles/footerStyles.module.css';

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.content}>
                <h2 className={styles.companyName}>Barry Ridling Painting</h2>
                <p className={styles.tagline}>A Quality Professional Painting Service</p>

                <div className={styles.contact}>
                    <p><strong>Work:</strong> 972-238-8767</p>
                    <p><strong>Mobile:</strong> 214-989-5841</p>
                    <p><strong>Email:</strong><a href='mailto:barryridling@aol.com'> barryridling@aol.com</a></p>
                </div>

                <p className={styles.copy}>
                    &copy; {new Date().getFullYear()} Barry Ridling Painting. All rights reserved.
                </p>
            </div>
        </footer>
    );
}