import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/hall-of-fame" className={styles.navLink}>Hall of Fame</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/betrayers" className={styles.navLink}>Betrayers</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/coaches" className={styles.navLink}>Coaches</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/merchandise" className={styles.navLink}>Merchandise</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
