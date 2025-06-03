import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import tuktuk_logo from '/assets/images/logo/tuktuk_logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={tuktuk_logo} alt="Tuk Tuk Academy Logo" className={styles.logo} />
        <h1 className={styles.academyName}>Tuk Tuk & Dinda Academy</h1>
      </div>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Home
        </Link>
        <Link
          to="/hall-of-fame"
          className={`${styles.navLink} ${location.pathname === '/hall-of-fame' ? styles.active : ''}`}
        >
          Hall of Fame
        </Link>
        <Link
          to="/betrayers"
          className={`${styles.navLink} ${location.pathname === '/betrayers' ? styles.active : ''}`}
        >
          Betrayers
        </Link>
        <Link
          to="/coaches"
          className={`${styles.navLink} ${location.pathname === '/coaches' ? styles.active : ''}`}
        >
          Coaches
        </Link>
        <Link
          to="/merchandise"
          className={`${styles.navLink} ${location.pathname === '/merchandise' ? styles.active : ''}`}
        >
          Merchandise
        </Link>
      </nav>
    </header>
  );
};

export default Header;