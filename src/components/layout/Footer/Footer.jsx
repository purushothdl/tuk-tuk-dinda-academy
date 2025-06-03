import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Tuk Tuk Academy. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="/about" className={styles.footerLink}>About</a>
        <a href="/contact" className={styles.footerLink}>Contact</a>
        <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;