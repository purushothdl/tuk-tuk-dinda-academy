import React from 'react';
import styles from './HeroSection.module.css';

const HeadingSection = () => {
  return (
    <section className={styles.headingSection}>
      <h1 className={styles.mainHeading}>
        Welcome to the <span className={styles.highlight}>Tuk Tuk</span>{' '}
        <span className={styles.highlight}>&</span>{' '}
        <span className={styles.highlight}>Dinda</span> Academy!
      </h1>
      <p className={styles.subHeading}>
        Where mediocrity is celebrated and spectacularly subpar performances earn legendary status. We honor the artists of the slow game and the masters of the expensive over.
      </p>
    </section>
  );
};

export default HeadingSection;